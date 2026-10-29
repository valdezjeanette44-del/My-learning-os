import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { access } from "node:fs/promises";

const entryPages = [
  "index.html",
  "knowledge.html",
  "projects.html",
  "review.html",
  "search.html",
  "tutor.html",
  "subjects/biology/index.html",
  "subjects/business/index.html",
  "subjects/chemistry/index.html",
  "subjects/economics/index.html",
  "subjects/history/index.html",
  "subjects/philosophy/index.html",
  "subjects/physics/index.html",
  "subjects/technology/index.html",
];

test("all expected app entry pages exist", async () => {
  await Promise.all(entryPages.map((path) => access(path)));
});

test("all entry pages use the same shared stylesheet cache version", async () => {
  for (const path of entryPages) {
    const html = await readFile(path, "utf8");
    assert.match(
      html,
      /styles\.css\?v=12(?:["'])/,
      `${path} should reference styles.css?v=12`,
    );
    assert.doesNotMatch(
      html,
      /styles\.css\?v=(?!11(?:["']))\d+/,
      `${path} contains a mismatched stylesheet cache version`,
    );
  }
});

test("all pages that use the shared learning app load its expected script version", async () => {
  for (const path of entryPages.filter((path) => path !== "knowledge.html")) {
    const html = await readFile(path, "utf8");
    assert.match(
      html,
      /learning\.js\?v=32(?:["'])/,
      `${path} should reference learning.js?v=32`,
    );
  }
});

test("Knowledge Map uses its dedicated script without booting the shared app twice", async () => {
  const html = await readFile("knowledge.html", "utf8");
  assert.match(html, /knowledge-map\.js\?v=8(?:["'])/);
  assert.doesNotMatch(html, /learning\.js\?v=\d+(?:["'])/, "Knowledge Map should not load learning.js because its dedicated script renders the page");
  assert.match(html, /knowledge-map\.css\?v=8(?:["'])/);
  await Promise.all(["knowledge-map.js", "knowledge-map.css"].map((path) => access(path)));
});

test("core shared assets exist", async () => {
  await Promise.all(["learning.js", "styles.css", "knowledge-map.css"].map((path) => access(path)));
});

test("homepage scroll restoration saves position only when leaving Home", async () => {
  const source = await readFile("learning.js", "utf8");
  assert.match(source, /function saveHomeScrollOnLeave\(\)/);
  assert.match(source, /window\.addEventListener\('pagehide',\s*saveHomeScrollOnLeave\)/);
  assert.match(
    source,
    /if\(path===['"]\/['"]\|\|path===['"]\/index\.html['"]\)\s*\{\s*try\{sessionStorage\.setItem\(['"]myLearningOS\.homeScroll['"],String\(window\.scrollY\)\)/,
    "scroll position should be saved only when leaving the homepage",
  );
});
