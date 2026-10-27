import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const source = await readFile("learning.js", "utf8");

// Evaluate the real lesson and quiz banks from learning.js, rather than a copied fixture.
const declarations = [
  "SUBJECTS",
  "QUIZ_MISCONCEPTIONS",
  "QUIZ_AUDIT_BANK",
  "QUIZ_TRANSFER_BANK",
  "QUIZ_MISCONCEPTION_STEMS",
  "QUIZ_TOPIC_LABELS",
  "QUIZ_CONCEPT_NOTES",
  "QUIZ_DISTRACTOR_FEEDBACK",
];
const context = vm.createContext({});
for (const name of declarations) {
  const startMatch = new RegExp("const\\s+" + name + "\\s*=").exec(source);
  assert.ok(startMatch, `missing declaration: ${name}`);
  const start = startMatch.index;
  const nextDeclaration = source.indexOf("\nconst ", start + startMatch[0].length);
  const sameLineDeclaration = source.indexOf("; const ", start + startMatch[0].length);
  const candidates = [nextDeclaration, sameLineDeclaration].filter(index => index >= 0);
  const end = candidates.length ? Math.min(...candidates) : source.length;
  const declaration = source.slice(start, end).trim();
  vm.runInContext(declaration, context, { timeout: 1000 });
}

const reasonStart = source.indexOf("function lessonQuizDistractorReason(");
const reasonEnd = source.indexOf("\nfunction ", reasonStart + 10);
assert.ok(reasonStart >= 0 && reasonEnd > reasonStart, "quiz feedback fallback function should exist");
vm.runInContext(source.slice(reasonStart, reasonEnd), context, { timeout: 1000 });

const generatorStart = source.indexOf("function lessonQuizQuestions(");
const generatorEnd = source.indexOf("\nfunction ", generatorStart + 10);
assert.ok(generatorStart >= 0 && generatorEnd > generatorStart, "quiz generator should exist");
vm.runInContext(source.slice(generatorStart, generatorEnd), context, { timeout: 1000 });

const feedbackStart = source.indexOf("function lessonQuizFeedbackText(");
const feedbackEnd = source.indexOf("\nfunction ", feedbackStart + 10);
assert.ok(feedbackStart >= 0 && feedbackEnd > feedbackStart, "quiz feedback renderer should exist");
vm.runInContext(source.slice(feedbackStart, feedbackEnd), context, { timeout: 1000 });

const subjects = vm.runInContext("SUBJECTS", context);
const generate = vm.runInContext("lessonQuizQuestions", context);

test("all eight subjects and 32 lesson definitions are present", () => {
  assert.equal(Object.keys(subjects).length, 8);
  let totalLessons = 0;
  for (const [subject, definition] of Object.entries(subjects)) {
    assert.equal(definition.lessons.length, 4, `${subject} should define four lessons`);
    totalLessons += definition.lessons.length;
  }
  assert.equal(totalLessons, 32);
});

test("every lesson generates three valid questions in both initial and retry variants", () => {
  for (const [subject, definition] of Object.entries(subjects)) {
    for (let lessonIndex = 0; lessonIndex < definition.lessons.length; lessonIndex++) {
      const title = definition.lessons[lessonIndex][0];
      const initial = generate(subject, lessonIndex, 0);
      const retry = generate(subject, lessonIndex, 1);
      assert.equal(initial.length, 3, `${subject} / ${title}: initial question count`);
      assert.equal(retry.length, 3, `${subject} / ${title}: retry question count`);

      for (let questionIndex = 0; questionIndex < 3; questionIndex++) {
        for (const [variantName, question] of [["initial", initial[questionIndex]], ["retry", retry[questionIndex]]]) {
          const label = `${subject} / ${title} / Q${questionIndex + 1} / ${variantName}`;
          assert.equal(question.options.length, 4, `${label}: exactly four options`);
          const texts = question.options.map(option => option.text.trim());
          assert.ok(texts.every(Boolean), `${label}: option text must not be empty`);
          assert.equal(new Set(texts).size, 4, `${label}: options must be unique`);
          assert.equal(question.options.filter(option => option.correct).length, 1, `${label}: exactly one correct option`);
          assert.ok(question.q && question.q.trim(), `${label}: question prompt must not be empty`);
          for (const option of question.options.filter(option => !option.correct)) {
            assert.ok(option.reason && option.reason.trim(), `${label}: every wrong option needs feedback`);
          }
        }

        const correctInitial = initial[questionIndex].options.find(option => option.correct).text;
        const correctRetry = retry[questionIndex].options.find(option => option.correct).text;
        assert.equal(correctRetry, correctInitial, `${subject} / ${title} / Q${questionIndex + 1}: retry must preserve the correct answer`);
        assert.deepEqual(
          retry[questionIndex].options.filter(option => !option.correct).map(option => option.text).sort(),
          initial[questionIndex].options.filter(option => !option.correct).map(option => option.text).sort(),
          `${subject} / ${title} / Q${questionIndex + 1}: retry must preserve the same distractors`,
        );
      }
    }
  }
});

test("quiz submission and review navigation retain their regression hooks", () => {
  assert.match(source, /function submitLessonQuiz\(/);
  assert.match(source, /function retryMissedLessonQuiz\(/);
  assert.match(source, /function renderReview\(/);
  assert.match(source, /quizResults/);
  assert.match(source, /lastScore/);
  assert.match(source, /reviewHref/);
  assert.match(source, /mcq-retry-missed-/);
});


test("Chemistry chemical-reactions feedback is specific to balancing equations and bubbles", () => {
  const feedback = vm.runInContext("QUIZ_DISTRACTOR_FEEDBACK", context);
  const expected = [
    ["Chemistry|Chemical reactions|understand|Delete extra oxygen atoms from the reactants.", /balanced equation.*same number of each type of atom.*do not delete atoms/i],
    ["Chemistry|Chemical reactions|understand|Change oxygen atoms into another element.", /does not turn oxygen into another element.*adjust coefficients/i],
    ["Chemistry|Chemical reactions|understand|Leave it unbalanced because atom counts do not matter.", /atom counts matter.*balanced on both sides/i],
    ["Chemistry|Chemical reactions|apply|The mixture must be boiling, so a chemical reaction is impossible.", /bubbles.*gas is forming.*additional evidence/i],
    ["Chemistry|Chemical reactions|apply|Any visible change proves a new element formed.", /visible change.*does not automatically mean a new element formed/i],
    ["Chemistry|Chemical reactions|apply|Bubbles prove every atom has been destroyed.", /atoms have been destroyed.*atoms are rearranged/i],
  ];
  for (const [key, pattern] of expected) {
    assert.ok(feedback[key], `missing distractor feedback: ${key}`);
    assert.match(feedback[key], pattern, `feedback should explain the specific misconception: ${key}`);
  }
});

test("Economics supply/demand misconception feedback reaches the rendered quiz message", () => {
  const question = generate("Economics", 1, 0)[0];
  const wrongIndex = question.options.findIndex(option => option.text === "Supply means how much buyers want to purchase at each price.");
  assert.notEqual(wrongIndex, -1, "the known supply/demand misconception should be a distractor");
  const message = vm.runInContext("lessonQuizFeedbackText", context)(question, false, wrongIndex);
  assert.match(message, /Demand describes how much buyers are willing and able to buy/i);
  assert.match(message, /supply describes how much sellers are willing and able to offer/i);
  assert.doesNotMatch(message, /chosen option mixes up that relationship/i);
});


test("Economics trade question 2 uses its specific feedback in the generated quiz message", () => {
  const question = generate("Economics", 3, 0)[1];
  const wrongText = "Absolute advantage means one country must produce everything.";
  const wrongIndex = question.options.findIndex(option => option.text === wrongText);
  assert.notEqual(wrongIndex, -1, "the absolute-advantage misconception should be a distractor");
  assert.match(question.options[wrongIndex].reason, /comparative advantage.*opportunity cost/i);
  const message = vm.runInContext("lessonQuizFeedbackText", context)(question, false, wrongIndex);
  assert.match(message, /absolute advantage means producing a good with fewer resources/i);
  assert.match(message, /comparative advantage.*opportunity cost/i);
  assert.doesNotMatch(message, /chosen option mixes up that relationship/i);
});

test("Economics trade question 3 uses its specific feedback in the generated quiz message", () => {
  const question = generate("Economics", 3, 0)[2];
  const wrongText = "The baker must do both tasks because being better at both removes gains from trade.";
  const wrongIndex = question.options.findIndex(option => option.text === wrongText);
  assert.notEqual(wrongIndex, -1, "the baker/helper misconception should be a distractor");
  assert.match(question.options[wrongIndex].reason, /helper may give up less baking output when cleaning/i);
  const message = vm.runInContext("lessonQuizFeedbackText", context)(question, false, wrongIndex);
  assert.match(message, /baker is more productive at both tasks/i);
  assert.match(message, /helper may give up less baking output when cleaning/i);
  assert.doesNotMatch(message, /chosen option mixes up that relationship/i);
});


test("Economics trade question 1 explains why specialization can benefit both sides", () => {
  const question = generate("Economics", 3, 0)[0];
  const wrongText = "Specialization always reduces productivity and makes trade unnecessary.";
  const wrongIndex = question.options.findIndex(option => option.text === wrongText);
  assert.notEqual(wrongIndex, -1, "the specialization misconception should be a distractor");
  const message = vm.runInContext("lessonQuizFeedbackText", context)(question, false, wrongIndex);
  assert.match(message, /specialization does not automatically reduce productivity/i);
  assert.match(message, /lower opportunity cost/i);
  assert.match(message, /trading with others/i);
  assert.match(message, /both sides better off/i);
  assert.doesNotMatch(message, /Compare it with the specific conditions/i);
});
