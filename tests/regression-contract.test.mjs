import test from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import vm from "node:vm";

const learning = await readFile("learning.js", "utf8");
const knowledgeMap = await readFile("knowledge-map.js", "utf8");
const homepage = await readFile("index.html", "utf8");

function loadCourseAndQuizContracts(source) {
  const subjectStart = source.indexOf("const SUBJECTS=");
  const subjectEnd = source.indexOf(";\nconst KEY=", subjectStart);
  const quizStart = source.indexOf("const QUIZ_MISCONCEPTIONS=");
  const quizEnd = source.indexOf("function lessonQuizHTML", quizStart);

  assert.ok(subjectStart >= 0 && subjectEnd > subjectStart, "course data block should be present");
  assert.ok(quizStart >= 0 && quizEnd > quizStart, "audited quiz bank and builder should be present");

  const subjectDeclaration = source.slice(subjectStart, subjectEnd + 1);
  const quizDeclarations = source.slice(quizStart, quizEnd);
  return vm.runInNewContext(
    `${subjectDeclaration}\n${quizDeclarations}\n({ SUBJECTS, lessonQuizQuestions })`,
    Object.create(null),
    { timeout: 1000 },
  );
}

const { SUBJECTS, lessonQuizQuestions } = loadCourseAndQuizContracts(learning);
const expectedSubjects = [
  "Biology", "Business", "Chemistry", "Economics",
  "History", "Philosophy", "Physics", "Technology",
];

test("the course data defines exactly the eight expected subjects", () => {
  assert.deepEqual(Object.keys(SUBJECTS).sort(), [...expectedSubjects].sort());
  for (const subject of expectedSubjects) {
    assert.ok(knowledgeMap.includes(`id:"${subject}"`), `Knowledge Universe should include ${subject}`);
  }
});

test("every subject has exactly four complete lessons (32 total)", () => {
  let total = 0;
  for (const subject of expectedSubjects) {
    const lessons = SUBJECTS[subject].lessons;
    assert.equal(lessons.length, 4, `${subject} should have exactly four lessons`);
    for (const [index, lesson] of lessons.entries()) {
      assert.equal(lesson.length, 5, `${subject} lesson ${index + 1} should have five expected fields`);
      for (const [fieldIndex, field] of lesson.entries()) {
        assert.equal(typeof field, "string", `${subject} lesson ${index + 1}, field ${fieldIndex + 1} should be text`);
        assert.ok(field.trim().length > 0, `${subject} lesson ${index + 1}, field ${fieldIndex + 1} should not be empty`);
      }
      assert.notEqual(lesson[3].trim(), lesson[4].trim(), `${subject} lesson ${index + 1} question and hint/answer must not be identical`);
      total += 1;
    }
  }
  assert.equal(total, 32, "the eight subjects should contain 32 lessons in total");
});

test("each lesson generates three valid quiz questions with one correct and three distinct choices", () => {
  for (const subject of expectedSubjects) {
    for (const [lessonIndex, lesson] of SUBJECTS[subject].lessons.entries()) {
      const questions = lessonQuizQuestions(subject, lessonIndex);
      assert.equal(questions.length, 3, `${subject} lesson ${lessonIndex + 1} should generate three quiz questions`);
      assert.deepEqual(
        Array.from(questions, question => question.skill),
        ["remember", "understand", "apply"],
        `${subject} lesson ${lessonIndex + 1} should cover recall, understanding, and application`,
      );
      for (const [questionIndex, question] of questions.entries()) {
        const label = `${subject} lesson ${lessonIndex + 1}, quiz question ${questionIndex + 1}`;
        assert.ok(question.q.trim(), `${label} should have a prompt`);
        assert.ok(question.explain.trim(), `${label} should have an explanation`);
        if (question.skill === "understand" || question.skill === "apply") {
          assert.equal(question.explain, question.options.find(option => option.correct).text, `${label} explanation should directly explain its own scenario/transfer answer`);
        }
        assert.equal(question.options.length, 4, `${label} should have four answer choices`);
        assert.equal(question.options.filter(option => option.correct).length, 1, `${label} should have exactly one keyed correct choice`);
        const choiceTexts = question.options.map(option => option.text.trim());
        assert.ok(choiceTexts.every(Boolean), `${label} should have no empty choices`);
        assert.equal(new Set(choiceTexts).size, 4, `${label} should have four distinct choices`);
        assert.ok(
          question.options.filter(option => !option.correct).every(option => option.reason?.trim()),
          `${label} should explain why each incorrect choice is less suitable`,
        );
      }
    }
  }
});

test("quiz submission gives correct feedback, explains incorrect answers, and persists scores", () => {
  const start = learning.indexOf("function submitLessonQuiz(");
  const end = learning.indexOf("\nfunction ", start + 1);
  const subjectStart = learning.indexOf("const SUBJECTS=");
  const subjectEnd = learning.indexOf(";\nconst KEY=", subjectStart);
  const quizStart = learning.indexOf("const QUIZ_MISCONCEPTIONS=");
  const quizEnd = learning.indexOf("function lessonQuizHTML", quizStart);
  assert.ok(start >= 0 && end > start, "quiz submission handler should exist");
  assert.ok(subjectStart >= 0 && subjectEnd > subjectStart, "course data block should be present");
  assert.ok(quizStart >= 0 && quizEnd > quizStart, "quiz data and builder should be present");

  const saved = {};
  const feedback = Array.from({ length: 3 }, () => ({ hidden: true, className: "", textContent: "" }));
  const result = { textContent: "" };
  const score = { textContent: "" };
  const retry = { hidden: true };
  const selected = new Map();
  const elements = { "mcq-result-0": result, "mcq-score-0": score, "mcq-retry-missed-0": retry };
  feedback.forEach((item, i) => { elements[`mcq-feedback-0-${i}`] = item; });
  const context = vm.createContext({
    window: {},
    document: {
      querySelector: selector => {
        if (selector === "#mcq-0 .mcq-score") return score;
        const value = selected.get(selector);
        return value === undefined ? null : { value };
      },
      getElementById: id => elements[id] || null,
    },
    state: () => JSON.parse(JSON.stringify(saved)),
    saveState: next => {
      for (const key of Object.keys(saved)) delete saved[key];
      Object.assign(saved, JSON.parse(JSON.stringify(next)));
    },
    Date, Math, Set, String,
  });
  const actualSubmit = vm.runInContext(
    `${learning.slice(subjectStart, subjectEnd + 1)}\n${learning.slice(quizStart, quizEnd)}\n${learning.slice(start, end)}\nsubmitLessonQuiz`,
    context,
    { timeout: 1000 },
  );
  const questions = vm.runInContext('lessonQuizQuestions("Physics", 0)', context);
  assert.equal(questions.length, 3, "test lesson should generate three questions");
  questions.forEach((q, i) => {
    selected.set(`input[name="mcq-0-${i}"]:checked`, String(q.options.findIndex(option => option.correct)));
  });

  actualSubmit({ preventDefault() {} }, "Physics", 0);
  assert.ok(feedback.every(item => item.hidden === false), "feedback should appear for every answered question");
  assert.ok(feedback.every(item => item.className.endsWith("correct")), "correct answers should receive correct styling");
  assert.ok(feedback.every(item => item.textContent.startsWith("✓ Correct.")), "correct answers should receive positive feedback");
  assert.ok(feedback.every(item => !/[.?!][.?!]/.test(item.textContent)), "feedback should not contain duplicate punctuation");
  assert.equal(saved.quizResults["Physics-0"].correct, questions.length, "all correct answers should be scored");
  assert.equal(saved.quizResults["Physics-0"].total, questions.length, "saved total should match the question count");
  assert.equal(saved.quizResults["Physics-0"].attempts, 1, "the attempt count should be saved");
  assert.equal(saved.quizResults["Physics-0"].mastered, true, "a perfect attempt should be marked mastered");
  assert.match(result.textContent, /Your score is saved on this device/);

  const incorrectIndex = questions[0].options.findIndex(option => !option.correct);
  selected.set('input[name="mcq-0-0"]:checked', String(incorrectIndex));
  actualSubmit({ preventDefault() {} }, "Physics", 0);
  assert.ok(feedback[0].className.endsWith("incorrect"), "an incorrect answer should receive incorrect styling");
  assert.ok(feedback[0].textContent.startsWith("✗ Not quite."), "an incorrect answer should receive corrective feedback");
  assert.match(feedback[0].textContent, /Correct answer:/, "incorrect feedback should reveal the correct answer");
  assert.ok(feedback[0].textContent.length > 40, "incorrect feedback should include an explanation");
  assert.equal(saved.quizResults["Physics-0"].correct, questions.length - 1, "score should reflect one incorrect answer");
  assert.equal(saved.quizResults["Physics-0"].attempts, 2, "a subsequent attempt should increment the attempt count");
  assert.deepEqual(Array.from(saved.quizResults["Physics-0"].missed), [0], "missed question indices should be saved");
  assert.equal(retry.hidden, false, "retry control should appear when questions were missed");
});
test("saved learning state keeps the established local-storage key", () => {
  assert.match(learning, /myLearningOS\.v2/);
  assert.match(knowledgeMap, /myLearningOS\.v2/);
});

test("Knowledge Universe retains its 12 subject connections and interaction controls", () => {
  const connections = [...knowledgeMap.matchAll(/^\["(?:Biology|Business|Chemistry|Economics|History|Philosophy|Physics|Technology)","(?:Biology|Business|Chemistry|Economics|History|Philosophy|Physics|Technology)",/gm)];
  assert.equal(connections.length, 12, "expected 12 documented subject connections");
  assert.match(knowledgeMap, /data-view="Graph"/);
  assert.match(knowledgeMap, /data-view="List"/);
  assert.match(knowledgeMap, /data-zoom/);
  assert.match(knowledgeMap, /data-reset/);
  assert.match(knowledgeMap, /data-connection/);
});

test("homepage mounts the app and loads its shared learning script", () => {
  assert.match(homepage, /id="app"/);
  assert.match(homepage, /learning\.js\?v=\d+/);
});

test("all eight dedicated subject pages exist", async () => {
  for (const subject of [
    "biology", "business", "chemistry", "economics",
    "history", "philosophy", "physics", "technology",
  ]) {
    await access(`subjects/${subject}/index.html`);
  }
});
