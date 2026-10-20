# My Learning OS — Baseline Audit
**Baseline date:** 2026-10-21  
**Repository:** https://github.com/valdezjeanette44-del/My-learning-os  
**Production URL:** https://my-learning-os.vercel.app  
**Default branch:** `main`  
**Baseline commit:** `8ab272e5341a39701314a2f7fd091b713686bca8`  
**Commit message:** Refresh cache for topic-specific lesson questions  
**Commit timestamp:** 2026-10-20 18:31:21 UTC  
**Recovery branch:** `baseline/2026-10-21` (created at the exact baseline commit)  
**Documentation branch:** `audit/phase-1-documentation`

## Purpose and safety boundary
This is a source-control baseline, not a claim that every feature has passed runtime tests. No application code was changed to create the recovery branch. The documentation is on a separate audit branch so it does not alter the baseline branch or trigger a production deployment through a commit to `main`.

## Deployment verification status
The configured production URL is the Vercel app above. The latest GitHub `main` commit was verified as `8ab272e5341a39701314a2f7fd091b713686bca8`. The exact commit currently serving production was **not independently verified** because Vercel deployment metadata/runtime inspection was not available in this audit session. Confirm the Production deployment's source commit in Vercel before treating the live runtime as identical to this baseline.

## Application architecture
- Static multi-page HTML app; pages render through `learning.js`.
- Styles: `styles.css`; Knowledge Universe also loads `knowledge-map.css`.
- Knowledge map script: `knowledge-map.js`.
- Tutor serverless endpoint: `api/tutor.js`.
- Browser persistence uses `localStorage` key `myLearningOS.v2`.
- No `package.json` or automated test configuration was present in the inspected repository tree.

## Routes and entry points

| Route | Entry file / handler | Expected purpose and behavior |
|---|---|---|
| `/` | `index.html` → `learning.js` | Home, learning areas, overview and navigation. |
| `/subjects/biology/` | `subjects/biology/index.html` → `learning.js` | Biology course and four lessons. |
| `/subjects/business/` | `subjects/business/index.html` → `learning.js` | Business course and four lessons. |
| `/subjects/chemistry/` | `subjects/chemistry/index.html` → `learning.js` | Chemistry course and four lessons. |
| `/subjects/economics/` | `subjects/economics/index.html` → `learning.js` | Economics course and four lessons. |
| `/subjects/history/` | `subjects/history/index.html` → `learning.js` | History course and four lessons. |
| `/subjects/philosophy/` | `subjects/philosophy/index.html` → `learning.js` | Philosophy course and four lessons. |
| `/subjects/physics/` | `subjects/physics/index.html` → `learning.js` | Physics course and four lessons. |
| `/subjects/technology/` | `subjects/technology/index.html` → `learning.js` | Technology course and four lessons. |
| `/knowledge.html` | `knowledge.html` → `learning.js` + `knowledge-map.js` | Knowledge Universe graph/list views, subject connections, filters, search and zoom. |
| `/projects.html` | `projects.html` → `learning.js` | Project list; supports project detail via `?project=...`. |
| `/review.html` | `review.html` → `learning.js` | Due reviews based on saved review schedule. |
| `/search.html` | `search.html` → `learning.js` | Search learning content. |
| `/tutor.html` | `tutor.html` → `learning.js` | Tutor UI, subject/lesson focus and saved per-subject conversation. |
| `POST /api/tutor` | `api/tutor.js` | Validates the request and calls the OpenAI Responses API server-side. |

Lesson deep links use fragments such as `/subjects/biology/#lesson-0`. Knowledge map links point to the corresponding lesson anchors.

## Important behaviors to preserve and test

### Lessons and progress
- Eight subjects, four lessons per subject (32 total).
- Lesson completion is stored in browser local storage.
- Lesson completion schedules a review for the next day and records learning activity.
- Notes and quiz results are stored locally.
- A data-backup section is available on subject pages.

### Quiz experience
- Lesson quizzes support multiple-choice questions, feedback, scoring and retrying missed questions.
- The general subject page also includes a quick quiz.
- Regression testing must verify that each question's correct answer and explanation match the actual question, and that punctuation/feedback is clean.

### Knowledge Universe
- Eight subject nodes and 12 defined connections in `knowledge-map.js`.
- Supports graph and list views, zoom/reset, subject/topic search, filters and connection explanations.
- Shares the `myLearningOS.v2` progress state.
- Both `learning.js` and `knowledge-map.js` currently contain map-rendering logic; verify the active implementation before consolidating it.

### Tutor API
- Only accepts POST and checks the request Origin against `https://my-learning-os.vercel.app`.
- Requires server environment variable `OPENAI_API_KEY`; the key is not intended to be sent to the browser.
- Limits message size and conversation history and returns structured errors.
- Its in-memory rate limit may not be consistent across serverless instances; strengthen it before public scale-up.

### Mobile/navigation
- Main navigation includes Home, Search, Projects, Review, Knowledge Map and Tutor; mobile navigation prioritizes Home, Learn, Projects, Review and a More menu.
- Actual iPhone Safari interaction testing remains outstanding, including tapping map lines, keyboard navigation, layout overflow, and persistence after refresh.

## Recovery instructions

### Restore or inspect the exact baseline
1. Open the repository's Branches page: https://github.com/valdezjeanette44-del/My-learning-os/branches
2. Select `baseline/2026-10-21`. This branch was created directly from the baseline commit without changing application files.
3. The exact commit is also available at https://github.com/valdezjeanette44-del/My-learning-os/commit/8ab272e5341a39701314a2f7fd091b713686bca8
4. To restore a future regression, compare the affected branch with this checkpoint and revert only the relevant changes. Do not force-push or reset production blindly.
5. Before a production rollback, verify the actual production deployment and its associated Git commit in Vercel.

## Known limitations of this baseline audit
- No automated tests were executed.
- No real-device browser test was executed in this session.
- The live Vercel deployment's exact source SHA has not been independently confirmed.
- Existing user progress resides in local browser storage and is not backed up by the GitHub code checkpoint.
