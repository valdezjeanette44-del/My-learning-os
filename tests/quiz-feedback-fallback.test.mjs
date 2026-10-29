import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";
const source = await readFile("learning.js", "utf8");
const start = source.indexOf("function lessonQuizDistractorReason(");
const end = source.indexOf("\nfunction ", start + 10);
const reason = vm.runInNewContext(source.slice(start, end) + "\nlessonQuizDistractorReason", Object.create(null));
test("fallback feedback identifies selected wrong answer and correct answer", () => {
 const wrong = "A pottery wheel creates sunlight.";
 const correct = "A pottery wheel helps shape clay evenly.";
 const result = reason("History", "Ancient pottery", "understand", wrong, correct, "The wheel rotates clay so a potter can shape it more evenly.");
 assert.ok(result.includes(wrong));
 assert.ok(result.includes(correct));
 assert.ok(result.includes("rotates clay"));
});
