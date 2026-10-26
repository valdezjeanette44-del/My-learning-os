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
    /paper map, wheel, or hand tool.*practical problem/i,
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


test("biology feedback corrects specific life and cell misconceptions", () => {
  assert.match(
    feedback["Biology|What is life?|remember|Every living organism must be made of many cells."],
    /single cell.*not a requirement for life/i,
  );
  assert.match(
    feedback["Biology|Cells: the basic unit|remember|All cells have a nucleus."],
    /prokaryotic cells.*lack one/i,
  );
  assert.match(
    feedback["Biology|Cells: the basic unit|remember|A cell membrane lets every substance pass freely in and out."],
    /selectively permeable.*rather than allowing everything/i,
  );
});

test("history feedback explains source evaluation and archaeological evidence", () => {
  assert.match(
    feedback["History|How do historians study the past?|remember|A written source is always more reliable than an object or oral account."],
    /depends on the question.*not simply whether it is written/i,
  );
  assert.match(
    feedback["History|Prehistory and archaeology|remember|Prehistory means that no evidence from the period exists."],
    /before written records.*archaeological remains/i,
  );
  assert.match(
    feedback["History|Prehistory and archaeology|understand|It has no historical value because it is not written."],
    /objects and their archaeological context are evidence/i,
  );
});
