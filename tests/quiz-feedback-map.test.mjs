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
