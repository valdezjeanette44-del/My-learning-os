import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile("learning.js", "utf8");
const start = source.indexOf("const QUIZ_DISTRACTOR_FEEDBACK = ");
const end = source.indexOf(";\n\nfunction lessonQuizDistractorReason", start);
assert.ok(start >= 0 && end > start, "explicit distractor feedback map should exist");
const declaration = source.slice(start, end + 1);
const jsonStart = declaration.indexOf("=");
const feedback = JSON.parse(declaration.slice(jsonStart + 1, -1).trim());

test("explicit feedback map contains all 288 lesson-specific distractors", () => {
  assert.equal(Object.keys(feedback).length, 288);
  for (const [key, reason] of Object.entries(feedback)) {
    assert.ok(key.split("|").length === 4, "key includes subject, lesson, skill, and distractor text");
    assert.ok(typeof reason === "string" && reason.trim().length > 0, "every distractor has feedback");
  }
});

test("quiz generator uses the explicit feedback map before keyword fallback", () => {
  assert.match(
    source,
    /reason:QUIZ_DISTRACTOR_FEEDBACK\[\`\$\{name\}\|\$\{title\}\|\$\{spec\.skill\}\|\$\{text\}\`\]\|\|lessonQuizDistractorReason/,
  );
});


test("philosophy feedback addresses the specific misconception in early lessons", () => {
  assert.match(
    feedback["Philosophy|What is philosophy?|remember|A philosophical argument is strong simply because many people agree with it."],
    /Popularity tells us.*not whether its reasons are sound/i,
  );
  assert.match(
    feedback["Philosophy|What is philosophy?|understand|Count votes and treat the majority as automatically correct."],
    /majority vote.*does not by itself show.*best justified/i,
  );
  assert.match(
    feedback["Philosophy|How do we know?|remember|A belief is justified whenever it happens to be true, even by luck."],
    /lucky true guess.*lacks the supporting reasons/i,
  );
  assert.match(
    feedback["Philosophy|How do we know?|apply|A notice from an unrelated day proves the train is delayed now."],
    /outdated.*current situation/i,
  );
});


test("technology feedback explains the specific misconception in early lessons", () => {
  assert.match(
    feedback["Technology|What is technology?|remember|Technology refers only to electronic devices and computers."],
    /paper map, wheel, or hand tool.*technology/i,
  );
  assert.match(
    feedback["Technology|What is technology?|apply|The paper map is not technology because it cannot collect live data."],
    /paper map is still technology.*Live updates are a feature/i,
  );
  assert.match(
    feedback["Technology|How does the internet work?|remember|Data travels across the internet without shared protocols or addressing."],
    /shared communication rules and addressing/i,
  );
  assert.match(
    feedback["Technology|How does the internet work?|understand|The browser downloads the entire internet first."],
    /does not download the whole internet/i,
  );
});
