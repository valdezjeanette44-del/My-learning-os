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

test("shared quiz feedback removes duplicated answer explanations", () => {
  const start = learning.indexOf("function lessonQuizFeedbackText(");
  const end = learning.indexOf("\nfunction submitLessonQuiz(", start);
  assert.ok(start >= 0 && end > start);
  const format = vm.runInNewContext(learning.slice(start, end) + "\nlessonQuizFeedbackText", Object.create(null), { timeout: 1000 });
  const answer = "Some people may take specialized jobs because not everyone must produce food full time.";
  const question = { explain: answer, options: [{ text: answer, correct: true }, { text: "Trade becomes impossible.", correct: false }] };
  assert.equal(format(question, false), "✗ Not quite. Correct answer: " + answer);
  question.explain = "The correct answer is " + answer;
  assert.equal(format(question, false), "✗ Not quite. Correct answer: " + answer);
  question.explain = "Farming could support settled communities, but outcomes varied.";
  assert.equal(format(question, false), "✗ Not quite. Correct answer: " + answer + " Farming could support settled communities, but outcomes varied.");
});

test("quiz submission gives correct feedback, explains incorrect answers, and persists scores", () => {
  const start = learning.indexOf("function submitLessonQuiz(");
  const end = learning.indexOf("\nfunction ", start + 1);
  const subjectStart = learning.indexOf("const SUBJECTS=");
  const subjectEnd = learning.indexOf(";\nconst KEY=", subjectStart);
  const feedbackStart = learning.indexOf("function lessonQuizFeedbackText(");
  const feedbackEnd = learning.indexOf("\nfunction submitLessonQuiz(", feedbackStart);
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
    `${learning.slice(subjectStart, subjectEnd + 1)}\n${learning.slice(quizStart, quizEnd)}\n${learning.slice(feedbackStart, feedbackEnd)}\n${learning.slice(start, end)}\nsubmitLessonQuiz`,
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
  const masteredReviewDays = (Date.parse(saved.quizResults["Physics-0"].nextReviewAt) - Date.now()) / 86400000;
  assert.ok(masteredReviewDays > 6.9 && masteredReviewDays < 7.1, "a mastered quiz should schedule the next review about seven days later");
  assert.match(result.textContent, /Your score is saved on this device/);

  const incorrectIndex = questions[0].options.findIndex(option => !option.correct);
  selected.set('input[name="mcq-0-0"]:checked', String(incorrectIndex));
  actualSubmit({ preventDefault() {} }, "Physics", 0);
  assert.ok(feedback[0].className.endsWith("incorrect"), "an incorrect answer should receive incorrect styling");
  assert.ok(feedback[0].textContent.startsWith("✗ Not quite."), "an incorrect answer should receive corrective feedback");
  assert.match(feedback[0].textContent, /Correct answer:/, "incorrect feedback should reveal the correct answer");
  assert.ok(feedback[0].textContent.length > 40, "incorrect feedback should include the correct answer");
  const shownCorrectAnswer = questions[0].options.find(option => option.correct).text.replace(/[.!?]+$/g, "").trim();
  assert.equal(feedback[0].textContent.split(shownCorrectAnswer).length - 1, 1, "incorrect feedback must not repeat the correct answer as its own explanation");
  assert.ok(feedback.every(item => !/[.?!][.?!]/.test(item.textContent)), "feedback should not contain duplicate punctuation");
  assert.equal(saved.quizResults["Physics-0"].correct, questions.length - 1, "score should reflect one incorrect answer");
  assert.equal(saved.quizResults["Physics-0"].attempts, 2, "a subsequent attempt should increment the attempt count");
  const retryReviewDays = (Date.parse(saved.quizResults["Physics-0"].nextReviewAt) - Date.now()) / 86400000;
  assert.ok(retryReviewDays > 0.9 && retryReviewDays < 1.1, "a quiz with missed questions should schedule the next review about one day later");
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


test("retry quiz variants preserve correct answers and explanation alignment across all lessons", () => {
  for (const subject of expectedSubjects) {
    for (const [lessonIndex, lesson] of SUBJECTS[subject].lessons.entries()) {
      const original = lessonQuizQuestions(subject, lessonIndex, 0);
      const retry = lessonQuizQuestions(subject, lessonIndex, 1);
      assert.equal(retry.length, original.length, `${subject} lesson ${lessonIndex + 1} retry should keep the same question count`);

      for (const [questionIndex, question] of retry.entries()) {
        const label = `${subject} lesson ${lessonIndex + 1}, retry question ${questionIndex + 1}`;
        const originalQuestion = original[questionIndex];
        const correct = question.options.filter(option => option.correct);
        assert.equal(question.skill, originalQuestion.skill, `${label} should keep its learning skill`);
        assert.equal(question.q, originalQuestion.q, `${label} should keep its question`);
        assert.equal(correct.length, 1, `${label} should have exactly one correct answer`);
        assert.equal(
          correct[0].text,
          originalQuestion.options.find(option => option.correct).text,
          `${label} should preserve the original correct answer`,
        );
        assert.ok(question.explain.trim(), `${label} should include an explanation`);
        if (question.skill === "understand" || question.skill === "apply") {
          assert.equal(
            question.explain,
            correct[0].text,
            `${label} explanation should match its keyed correct answer`,
          );
        }
        assert.equal(question.options.length, 4, `${label} should have four choices`);
        assert.equal(
          new Set(question.options.map(option => option.text.trim())).size,
          4,
          `${label} should have four distinct choices`,
        );
        assert.ok(
          question.options.filter(option => !option.correct).every(option => option.reason?.trim()),
          `${label} should explain every incorrect choice`,
        );
      }
    }
  }
});


test("all quiz variants produce clear feedback without duplicated punctuation or mismatched scenario explanations", () => {
  const feedbackStart = learning.indexOf("function lessonQuizFeedbackText(");
  const feedbackEnd = learning.indexOf("\nfunction submitLessonQuiz(", feedbackStart);
  assert.ok(feedbackStart >= 0 && feedbackEnd > feedbackStart, "shared quiz feedback formatter should exist");
  const formatFeedback = vm.runInNewContext(
    learning.slice(feedbackStart, feedbackEnd) + "\nlessonQuizFeedbackText",
    Object.create(null),
    { timeout: 1000 },
  );

  for (const subject of expectedSubjects) {
    for (const [lessonIndex, lesson] of SUBJECTS[subject].lessons.entries()) {
      for (const variant of [0, 1]) {
        const questions = lessonQuizQuestions(subject, lessonIndex, variant);
        for (const [questionIndex, question] of questions.entries()) {
          const label = `${subject} lesson ${lessonIndex + 1}, variant ${variant}, question ${questionIndex + 1}`;
          const correctAnswer = question.options.find(option => option.correct);
          assert.ok(correctAnswer, `${label} should have a keyed correct answer`);
          assert.ok(question.explain.trim(), `${label} should include an explanation`);
          if (question.skill === "understand" || question.skill === "apply") {
            assert.equal(
              question.explain,
              correctAnswer.text,
              `${label} explanation should match its scenario/transfer answer`,
            );
          }
          for (const isCorrect of [true, false]) {
            const feedback = formatFeedback(question, isCorrect);
            assert.ok(!/[.?!][.?!]/.test(feedback), `${label} feedback should not contain duplicated punctuation: ${feedback}`);
            if (isCorrect) {
              assert.ok(feedback.startsWith("✓ Correct."), `${label} should show positive feedback`);
            } else {
              assert.ok(
                feedback.startsWith("✗ Not quite. Correct answer:"),
                `${label} should identify the correct answer after an incorrect choice`,
              );
              assert.ok(
                feedback.includes(correctAnswer.text.replace(/[.!?]+$/, "")),
                `${label} incorrect feedback should identify the keyed answer`,
              );
            }
          }
        }
      }
    }
  }
});

test("homepage scroll handler saves Home position but never overwrites it from other pages", () => {
  const start = learning.indexOf("function saveHomeScrollOnLeave()");
  const end = learning.indexOf("\nwindow.addEventListener('pagehide',saveHomeScrollOnLeave);", start);
  assert.ok(start >= 0 && end > start, "homepage scroll-saving handler should exist");
  const handlerSource = learning.slice(start, end);

  function runHandler(pathname, scrollY, initialValue = null) {
    const values = new Map();
    if (initialValue !== null) values.set("myLearningOS.homeScroll", initialValue);
    const context = vm.createContext({
      location: { pathname },
      window: { scrollY },
      sessionStorage: {
        setItem: (key, value) => values.set(key, String(value)),
        getItem: key => values.has(key) ? values.get(key) : null,
      },
    });
    vm.runInContext(handlerSource + "\nsaveHomeScrollOnLeave();", context, { timeout: 1000 });
    return values.get("myLearningOS.homeScroll") ?? null;
  }

  assert.equal(runHandler("/", 1240), "1240", "leaving Home should save its current scroll position");
  assert.equal(runHandler("/index.html", 860), "860", "the index.html homepage should also save its position");
  assert.equal(
    runHandler("/projects.html", 300, "1240"),
    "1240",
    "leaving Projects must not overwrite the previously saved Home position",
  );
  assert.equal(
    runHandler("/review.html", 520, "860"),
    "860",
    "leaving Review must not overwrite the previously saved Home position",
  );
});

test("subject and homepage notes are written to saved learning state", () => {
  function exerciseNoteSaver(functionName, bodyDatasetSubject, inputId, inputValue) {
    const savedState = { notes: {} };
    let persisted = null;
    const elements = {
      [inputId]: { value: inputValue },
      saved: { textContent: "" },
    };
    const context = vm.createContext({
      document: {
        body: { dataset: { subject: bodyDatasetSubject } },
        getElementById: id => elements[id] || null,
      },
      state: () => JSON.parse(JSON.stringify(savedState)),
      saveState: next => {
        for (const key of Object.keys(savedState)) delete savedState[key];
        Object.assign(savedState, JSON.parse(JSON.stringify(next)));
        persisted = JSON.parse(JSON.stringify(next));
      },
      setTimeout: () => 0,
    });
    const functionStart = learning.indexOf("function " + functionName + "(");
    const nextBoundary = functionName === "saveNote" ? "function renderQuiz(" : "const PROJECTS=";
    const functionEnd = learning.indexOf(nextBoundary, functionStart);
    const functionSource = learning.slice(functionStart, functionEnd);
    assert.ok(functionSource.includes(functionName + "("), functionName + " should exist");
    vm.runInContext(functionSource + "\n" + functionName + "();", context, { timeout: 1000 });
    return { savedState, persisted, elements };
  }

  const subject = exerciseNoteSaver("saveNote", "Biology", "note", "Plants use sunlight to make sugars.");
  assert.equal(subject.persisted.notes.Biology, "Plants use sunlight to make sugars.");
  assert.equal(subject.elements.saved.textContent, "Saved ✓");

  const home = exerciseNoteSaver("saveHomeNote", "", "homeNote", "Connect photosynthesis with energy flow.");
  assert.equal(home.persisted.notes.home, "Connect photosynthesis with energy flow.");
});

test("completing a lesson persists progress and does not duplicate completion history", () => {
  const start = learning.indexOf("function completeLesson(");
  const end = learning.indexOf("function showReviewScheduled(", start);
  assert.ok(start >= 0 && end > start, "lesson completion handler should exist");
  const handler = learning.slice(start, end);

  const savedState = { completed: {}, learningLog: [], review: {}, activity: {} };
  const saves = [];
  let renderCount = 0;
  let openCount = 0;
  const context = vm.createContext({
    state: () => savedState,
    saveState: next => saves.push(JSON.parse(JSON.stringify(next))),
    addDays: (date, days) => new Date(date.getTime() + days * 86400000),
    dateKey: () => "2026-10-25",
    renderSubject: () => { renderCount++; },
    openLesson: () => { openCount++; },
    setTimeout: () => 0,
    showReviewScheduled: () => {},
    Date,
  });

  vm.runInContext(handler + "\ncompleteLesson('Biology', 0);", context, { timeout: 1000 });
  assert.deepEqual(Array.from(savedState.completed.Biology), [0]);
  assert.equal(savedState.learningLog.length, 1);
  assert.equal(savedState.learningLog[0].id, "Biology-0");
  assert.ok(savedState.review["Biology-0"].nextReview, "next review should be saved");
  assert.ok(savedState.activity["2026-10-25"], "daily learning activity should be saved");
  assert.equal(saves.length, 1, "completion should persist state");

  vm.runInContext("completeLesson('Biology', 0);", context, { timeout: 1000 });
  assert.deepEqual(Array.from(savedState.completed.Biology), [0], "the lesson should not be marked complete twice");
  assert.equal(savedState.learningLog.length, 1, "repeating completion should not duplicate the learning log entry");
  assert.equal(saves.length, 2, "state should still be saved on repeated completion");
  assert.equal(renderCount, 2);
  assert.equal(openCount, 2);
});



test("Review page includes separately scheduled quiz reviews and distinguishes due from upcoming", () => {
  assert.ok(learning.includes("function getQuizReviewItems()"), "quiz review items should be derived from saved quiz results");
  const start = learning.indexOf("function getQuizReviewItems()");
  const end = learning.indexOf("function renderReview()", start);
  assert.ok(end > start, "quiz review helper should be defined before Review rendering");
  const helper = learning.slice(start, end);
  const savedState = {
    quizResults: {
      "Physics-0": {
        subject: "Physics", index: 0, lastScore: 3, total: 3,
        nextReviewAt: "2026-11-01T12:00:00.000Z",
      },
      "Biology-0": {
        subject: "Biology", index: 0, lastScore: 2, total: 3,
        nextReviewAt: "2026-10-20T12:00:00.000Z",
      },
      "Unknown-0": {
        subject: "Unknown", index: 0, nextReviewAt: "2026-10-20T12:00:00.000Z",
      },
    },
  };
  const context = vm.createContext({
    state: () => savedState,
    SUBJECTS,
    Date: class extends Date {
      constructor(...args) { super(...(args.length ? args : ["2026-10-25T12:00:00.000Z"])); }
      static now() { return new Date("2026-10-25T12:00:00.000Z").getTime(); }
    },
    Number,
  });
  const items = vm.runInContext(helper + "\ngetQuizReviewItems()", context, { timeout: 1000 });
  assert.equal(items.length, 2, "unknown subjects should be ignored");
  assert.equal(items[0].subject, "Biology");
  assert.equal(items[0].due, true, "past quiz review date should be due");
  assert.equal(items[1].subject, "Physics");
  assert.equal(items[1].due, false, "future quiz review date should be upcoming");
  assert.ok(learning.includes("Today's lesson review"), "lesson reviews should remain separately labelled");
  assert.ok(learning.includes("memory-dashboard"), "Review should use the memory dashboard layout");
  assert.ok(learning.includes("Coming up"), "upcoming lesson and quiz reviews should have their own section");
  assert.ok(learning.includes("formatDate(x.date.toISOString())"), "scheduled review dates should be visible");
  assert.ok(learning.includes("Quiz review"), "quiz reviews should remain clearly labelled");
});
