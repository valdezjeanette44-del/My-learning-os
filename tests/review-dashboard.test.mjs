import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("Review scheduling classifies reviews by the user's local calendar day", async () => {
  const source = await readFile("learning.js", "utf8");
  assert.match(source, /function localReviewDayKey\(date\)/);
  assert.match(source, /localReviewDayKey\(x\.date\)<todayKey/);
  assert.match(source, /localReviewDayKey\(x\.date\)===todayKey/);
  assert.match(source, /localReviewDayKey\(x\.date\)>todayKey/);
});

test("Review progress uses additive data in the existing local state", async () => {
  const source = await readFile("learning.js", "utf8");
  assert.match(source, /reviewCompletions/);
  assert.match(source, /myLearningOS\.v2/);
  assert.match(source, /memory-progress/);
});

test("Review dashboard has isolated scroll restoration", async () => {
  const source = await readFile("learning.js", "utf8");
  assert.match(source, /function saveReviewScrollOnLeave\(\)/);
  assert.match(source, /myLearningOS\.reviewScroll/);
  assert.match(source, /window\.addEventListener\('pagehide',saveReviewScrollOnLeave\)/);
});

test("Review dashboard compact styles are scoped to memory components", async () => {
  const css = await readFile("styles.css", "utf8");
  assert.match(css, /Compact Review dashboard/);
  assert.match(css, /\.memory-start-copy h2/);
  assert.match(css, /\.memory-review-row/);
});

test("Review dashboard count badges render real counts and the empty progress state is readable", async () => {
  const source = await readFile("learning.js", "utf8");
  assert.match(source, /<h2>Due today <span class="memory-count">\$\{dueTodayItems\.length\}<\/span><\/h2>/);
  assert.match(source, /<h2>Coming up <span class="memory-count">\$\{upcomingItems\.length\}<\/span><\/h2>/);
  assert.match(source, /const progressLabel=progressTotal\?completedToday\+' \/ '\+progressTotal:'All caught up'/);
  assert.doesNotMatch(source, /memory-count">['"]\+dueTodayItems\.length\+/);
});
