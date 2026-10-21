import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const learning = await readFile("learning.js", "utf8");
const knowledgeMap = await readFile("knowledge-map.js", "utf8");
const homepage = await readFile("index.html", "utf8");

test("the existing app defines all eight expected learning subjects", () => {
  for (const subject of [
    "Biology", "Business", "Chemistry", "Economics",
    "History", "Philosophy", "Physics", "Technology",
  ]) {
    assert.ok(
      learning.includes(`"${subject}"`) || learning.includes(`${subject}:`),
      `learning.js should define ${subject}`,
    );
    assert.ok(
      knowledgeMap.includes(`id:"${subject}"`),
      `Knowledge Universe should include ${subject}`,
    );
  }
});

test("each subject's course data includes a lessons collection", () => {
  assert.match(learning, /lessons\s*:/);
  const lessonCollectionCount = [...learning.matchAll(/"lessons"\s*:\s*\[\[/g)].length;
  assert.equal(
    lessonCollectionCount,
    8,
    "expected one lessons collection for each of the eight subjects",
  );
});

test("lesson quiz submission includes correct/incorrect feedback and score persistence", () => {
  assert.match(learning, /function\s+submitLessonQuiz\s*\(/);
  assert.match(learning, /Correct\./);
  assert.match(learning, /Not quite\./);
  assert.match(learning, /quizResults/);
  assert.match(learning, /lastScore/);
});

test("saved learning state keeps the established local-storage key", () => {
  assert.match(learning, /myLearningOS\.v2/);
  assert.match(knowledgeMap, /myLearningOS\.v2/);
});

test("Knowledge Universe retains its expected subject connections and interaction controls", () => {
  const connections = [...knowledgeMap.matchAll(/^\["(?:Biology|Business|Chemistry|Economics|History|Philosophy|Physics|Technology)","(?:Biology|Business|Chemistry|Economics|History|Philosophy|Physics|Technology)",/gm)];
  assert.equal(connections.length, 12, "expected 12 documented subject connections");
  assert.match(knowledgeMap, /data-view="Graph"/);
  assert.match(knowledgeMap, /data-view="List"/);
  assert.match(knowledgeMap, /data-zoom/);
  assert.match(knowledgeMap, /data-reset/);
  assert.match(knowledgeMap, /data-connection/);
});

test("homepage retains links to the core learning routes", () => {
  for (const route of [
    "/subjects/biology/", "/subjects/business/", "/subjects/chemistry/",
    "/subjects/economics/", "/subjects/history/", "/subjects/philosophy/",
    "/subjects/physics/", "/subjects/technology/",
    "/knowledge.html", "/projects.html", "/review.html", "/search.html",
  ]) {
    assert.ok(homepage.includes(route), `homepage should link to ${route}`);
  }
});
