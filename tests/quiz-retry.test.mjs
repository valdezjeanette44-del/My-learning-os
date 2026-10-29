import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const learning = await readFile("learning.js", "utf8");
const start = learning.indexOf("function retryMissedLessonQuiz(");
const end = learning.indexOf("\nfunction resetLessonQuiz(", start);
assert.ok(start >= 0 && end > start, "retry handler should exist");
const retryHandler = learning.slice(start, end);

test("retry re-renders only saved missed questions", () => {
  const saved = { quizResults: { "Physics-0": { missed: [1] } } };
  const fields = [0, 1, 2].map((i) => ({
    innerHTML: "original-" + i,
    scrolls: 0,
    scrollIntoView() { this.scrolls += 1; },
  }));
  const retryButton = { hidden: false };
  const result = { textContent: "" };
  const elements = {
    "mcq-question-0-0": fields[0],
    "mcq-question-0-1": fields[1],
    "mcq-question-0-2": fields[2],
    "mcq-retry-missed-0": retryButton,
    "mcq-result-0": result,
  };
  const context = vm.createContext({
    state: () => saved,
    window: {},
    document: { getElementById: (id) => elements[id] || null },
    esc: String,
    lessonQuizQuestions: () => [
      { q: "Q0 retry", options: [{ text: "A", correct: true }, { text: "B", correct: false }] },
      { q: "Q1 retry", options: [{ text: "C", correct: true }, { text: "D", correct: false }] },
      { q: "Q2 retry", options: [{ text: "E", correct: true }, { text: "F", correct: false }] },
    ],
  });

  vm.runInContext(retryHandler + "\nretryMissedLessonQuiz('Physics', 0)", context, { timeout: 1000 });

  assert.equal(fields[0].innerHTML, "original-0", "correctly answered question stays untouched");
  assert.match(fields[1].innerHTML, /Q1 retry/, "only missed question gets the retry variant");
  assert.match(fields[1].innerHTML, /data-correct="true"/, "retry options retain correctness metadata");
  assert.equal(fields[2].innerHTML, "original-2", "other question stays untouched");
  assert.deepEqual(fields.map((field) => field.scrolls), [0, 1, 0]);
  assert.equal(retryButton.hidden, true);
  assert.equal(result.textContent, "Retry only the questions you missed, then check your score again.");
  assert.equal(context.window.quizRetryVariant["Physics-0"], 1);
});

test("empty missed list falls back to the existing quiz reset", () => {
  const resetCalls = [];
  const context = vm.createContext({
    state: () => ({ quizResults: { "Physics-0": { missed: [] } } }),
    resetCalls,
    resetLessonQuiz(index) { resetCalls.push(index); },
    window: {},
    document: { getElementById: () => null },
  });

  vm.runInContext(retryHandler + "\nretryMissedLessonQuiz('Physics', 0)", context, { timeout: 1000 });
  assert.deepEqual(resetCalls, [0]);
});
