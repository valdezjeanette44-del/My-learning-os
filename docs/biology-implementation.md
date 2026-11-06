# Biology implementation — first increment

## Current acceptance and local follow-up — 6 November 2026

**Preview update authorization:** founder approved committing only this button refinement and its implementation record, then pushing `codex/biology-journey` to update the protected preview. The 6/6 acceptance below applies to `91b5f0b`; the updated preview requires a new iPhone button retest. No merge or production deployment is authorized. Statements below describing the correction as local record its pre-publication verification checkpoint.

Reviewed preview: `91b5f0b0bb3ecd2bcd2aca3587a65a66ba80418d` on `codex/biology-journey`, committed and pushed; separate Vercel Preview previously verified Ready with Authentication. [Lesson 2 preview](https://my-learning-os-git-codex-biology-journey-my-learning-os.vercel.app/subjects/biology/#lesson-1). Production was last verified at `ec8113047ce5dab1eba75d98bd6dbaf894e85031`; this follow-up makes no production change or new live-production verification claim. Earlier local-only statements below are historical checkpoints, superseded by this status.

**Founder-reported real-iPhone functional acceptance: 6/6 passed**, for that preview revision:

- Three-question quiz accepts answers and displays feedback.
- Written answers persist after refresh.
- Understand, Compare cells, Practice and Reflect navigation works.
- Completion persists after refresh.
- Biology overview, Next lesson and browser Back/Forward work.
- My Notes opens correctly.

This is functional acceptance reported by the founder, not independent device testing, full accessibility acceptance or production acceptance.

**Local correction, not committed/pushed/deployed:** shared `.text-action` rules used `!important` to remove the lesson's minimum button height and horizontal padding. A Cells-only CSS override restores a 44px minimum height, 10px/12px padding, natural wrapping and constrained width. Existing focus/error rules, handlers, curriculum, stable ID `biology-cells` / legacy index 1 and global navigation remain unchanged. No cache-version change is published in this local follow-up; verify fresh CSS when a later preview update is authorized.

**Verification:** all 100 automated tests pass, including stable/legacy identity, reversed presentation, historical quiz-source hashes, unknown-record preservation, backup compatibility and save-failure coverage. JavaScript syntax and whitespace checks pass. No JavaScript, storage schema, saved record or backup-format change. No founder records were read, cleared or restored during this check.

An isolated real browser at `http://127.0.0.1:8769` verified the corrected button at 320px and 375px widths: 44px measured height, 10px/12px padding at 375px, working explanation toggle, no horizontal page overflow. At 375x812, existing fixed navigation measured about 63px high with its top at 741px; after scrolling to the footer, backup controls ended at 367px, 421px and 475px, and the footer at 682px. Existing body bottom padding is 100px plus safe-area inset. Controls are scrollable clear of navigation in that browser; no global navigation correction is justified by these observations. This does not establish iPhone safe-area, open keyboard or zoom behavior. Screenshot captured outside the repository.

**Outstanding:** founder iPhone retest of the new local button styling; VoiceOver/other screen readers and announcement order; exhaustive keyboard/focus traversal; 200% zoom/text enlargement and reflow; measured contrast across normal/focus/error/disabled states; actual OS reduced-motion behavior; iPhone safe-area and on-screen-keyboard overlap; failed-save real-browser retest. Reduced-motion and save failures have automated coverage only. Checkpoints and other lesson enhancements remain outside this task. No new commit, push, PR, merge or deployment performed.

> Preview preparation, 6 November 2026: founder approved a scoped Biology commit and push of `codex/biology-journey` for a separate authenticated Vercel preview. Production/merge remain unauthorized. The historical-content regression test now checks fixed SHA-256 expectations from release `ec81130`, independent of HEAD and Git-history depth; all 100 tests pass. Earlier local-only checkpoints below are retained as verification history. Unrelated foundation documents remain outside this scoped commit and preserved locally.

Historical initial status: local, uncommitted prototype on `codex/biology-journey`, based on released `ec8113047ce5dab1eba75d98bd6dbaf894e85031`. Founder authorized starting the blueprint on 6 November 2026. See current acceptance above for the later preview and local follow-up status.

## Technical approach

Use the existing JavaScript renderer and handwritten CSS for this bounded overview/navigation increment. React could offer component tooling but requires a build pipeline and integration with existing global renderers; Tailwind requires a separate styling/build decision; a database requires accounts, access isolation and local-data migration. None is necessary to render this overview, so no dependencies or persistence migration are introduced. Revisit those options against concrete requirements before broader adoption.

`subjectJourneyHTML` is a presentation helper. Only Biology opts in. The first increment retains existing lesson content, practice, completion, notes and backup behavior. A later content catalog can supply the shared subject presentation once Biology's full template is verified. This is not yet the completed reusable standard.

## Implemented locally

- Calm green/neutral overview with restrained purple actions; next unfinished lesson and four accessible journey links.
- Unique valid core-lesson completion count, separate from mastery and historical self-marked scores.
- Existing Plant Evolution, Knowledge Map, Notes Library, Review and Tutor links. Tutor requires explicit Biology selection; it does not receive notes automatically.
- Biology library count uses explicit category metadata; original subject notes remain accessible.
- Self-marked Quick quiz relabeled Self-reflection for Biology, with unchanged saved records.
- Biology hash deep links open the intended lesson on load/refresh. Existing review quiz links retain their scroll target.
- Cache references advance to learning.js v35 and styles.css v14; no Home or other-subject layout redesign.

## Verification

82 Node tests pass, including five behavioral tests for empty/partial/completed records, duplicate/unknown completion indices, explicit note categorization, rendering without record mutation and legacy deep links. JavaScript syntax and whitespace checks pass.

Isolated browser at localhost port 8767: overview loads; DNA journey link opens lesson 3; refresh retains the open hash destination; no console errors observed. Narrow-screen check reported matching document/client widths (375px), with no horizontal overflow. Desktop and mobile screenshots captured outside the repository. Real iPhone Safari and full save/restore regression for this increment remain pending; prior release checks are not counted as this increment's acceptance.

## Next blueprint increments

### Enhanced Cells lesson — 6 November 2026, local implementation

Founder approved Lesson 2 only. `cellsLessonIntroduction` and `cellsLessonSummary` add the opening question, three objectives, progressive membrane/transport/cell-organization explanations, two original SVG diagrams with adjacent descriptions, an oxygen-diffusion connection, summary and identity-resolved Next link. `lessonHTML` opts in only for `biology-cells` / legacy 1. Existing answer, quiz, self-assessment, completion and review controls are reused; Notes Library access remains an ordinary link with explicit saving. No contextual drafts or checkpoints.

Scientific validation uses OpenStax Biology 2e sections 4.2, 4.3, 5.2 and 5.3, linked from the lesson. Teaching distinguishes typical cells from specialized exceptions, membrane from wall, passive from active transport, and selectivity from intelligent exclusion of harmful material. Diagrams are simplified and not to scale. No external expert review is claimed.

97 tests pass, including enhancement isolation, unchanged historical subject/quiz-source regions, original answer/control identities, no record mutation and diagram descriptions. Syntax and whitespace checks pass. Isolated browser at localhost 8768 passed original three-question quiz (3/3), answer save/refresh, completion/refresh, Next and Back/Forward, Notes Library access, quiz Review deep link, loaded diagrams, and backup export. Compared exported data with the prior disposable backup: DNA/Evolution answers, Evolution quiz/review, notes and Notes Library remained identical; Cells writes use index 1. Narrow-screen document/client widths both 375px; no horizontal overflow observed. Basic Tab navigation reached the overview link; no console errors observed. Real iPhone Safari, screen-reader review, 200% zoom, detailed contrast measurements, failed-save retesting and reduced-motion scrolling remain unverified. Existing automated save-failure/backup round-trip coverage passes; no restore into founder data was performed.

Changed application files: learning.js, lesson-scoped styles.css, assets/biology/cell-comparison.svg and membrane-exchange.svg. New tests/biology-cells.test.mjs. Historical lesson tuple, order, quiz banks/generator and storage format unchanged. Existing local cache versions v35/v14 remain appropriate to this still-unpublished branch. Revert only the Cells helper/integration/styles/assets to undo this increment; retain identity/history fixes and saved records. No commit, push, PR, merge or deployment.

Enhanced seven-part lessons and authoritative Biology content review; three distinct checkpoints with stable assessment/option IDs and additive validated storage; subject-context Tutor entry; contextual note drafts with discard protection; explicit review scheduling and broader compatibility/browser checks. These features are not represented as implemented in this increment. Existing Step 5 refinements from the separate checkout remain out of scope.

## Stable identity foundation — 6 November 2026

Founder authorized this local increment on the existing branch. `BIOLOGY_LESSON_IDENTITIES` permanently maps `biology-life`, `biology-cells`, `biology-dna-heredity` and `biology-natural-selection` to legacy indices 0–3. `BIOLOGY_DISPLAY_ORDER` is separate and currently preserves the original order. The legacy content array is frozen against in-place reordering; future presentation changes must use the ID list, not rearrange storage slots.

`resolveSubjectLesson` resolves a stable ID or numeric legacy index to content, legacy key and URL; unknown identities return null. `subjectLessonEntries` resolves presentation order. `resolveLessonRecords` reads completion, answer, self-check, historical quiz result and review through the original identity without modifying the snapshot. Both lesson-body rendering and overview navigation use resolved legacy indices. Existing save/completion/practice/review handlers, Home/Search/Tutor and Knowledge Map continue using the same legacy slots. Knowledge Map content and connections are unchanged.

No stable IDs are written to storage. No migration, backup version change, question revision or regrading is introduced. Unknown records remain in storage/export; they are not guessed into a known lesson. Numeric writer APIs still require legacy indices, not display positions or stable-ID strings. Historical question/option positions lack revisions; changing content later still requires an assessment compatibility decision. This foundation does not authorize insertion/deletion or physical reordering of legacy content slots.

Seven focused identity tests plus the existing suite pass (89 total): ID/index resolution, reversed display/record resolution, original Map link slots, resolved writes, full subject rendering with reversed presentation and zero storage writes, completion/review keys and exact backup-data preservation. Existing data-safety tests cover backup restore round trips. Syntax and whitespace checks pass. Browser/device acceptance of this identity increment remains pending; simulated DOM tests are not real-browser evidence. Local only; no commit, push, PR, merge or deployment.

## Recovery and rollout

### Cells visual/accessibility refinement — 6 November 2026, local only

Founder approved a focused refinement. Lesson 2 now has a compact title header, keyboard-operable section buttons (Understand, Compare cells, Practice, Reflect), desktop explanation/diagram pairs and stacked phone diagram alternatives. Section buttons focus existing content without changing the lesson hash, re-rendering or writing storage. Two new original mobile SVGs use 19-unit labels in a 360-unit viewBox (about 15.7px at the tested 298px image width; smallest note about 14px). Existing desktop SVGs remain available through picture sources.

Scoped purple controls retain visible focus, disabled state and existing red/green quiz feedback. Added plain-language ATP and electrochemical-gradient explanations and explicit inward-gradient assumptions for the schematic exchange diagram. Biology lesson/review scroll paths and Cells section scrolling honor reduced-motion preference; other subjects retain their prior JavaScript scrolling behavior.

100 automated tests pass, including section focus/hash preservation, unknown-section no-op, reduced-motion scroll behavior, mobile assets and unchanged historical quiz-source content. Syntax/whitespace checks pass. Isolated real-browser checks: desktop two-column grids; stacked mobile SVGs loaded; 375px viewport/document widths match; keyboard Practice focuses mcq-1 without changing #lesson-1; Next/Back/Forward; saved answer and quiz retry survive refresh; completed status remains. Intentional 2/3 retry retains previous best 3/3 and increments attempts to 2. Backup v2 compared with the previous disposable export is identical outside the intentionally changed Cells answer/quiz record; original completions, notes, other lessons and review records remain intact. No console errors observed. Full-page desktop/mobile screenshots captured outside the repository.

Real iPhone Safari, screen-reader announcements, exhaustive keyboard traversal, zoom/contrast audit, failed-save browser retesting and actual OS reduced-motion/browser behavior remain pending. Reduced-motion behavior is covered by automated simulation, not a real OS preference test. Navigation/quiz controls retain existing persistence semantics; no checkpoint, contextual note draft, framework, storage or global navigation changes. No commit, push, PR, merge or deployment.

### Biology history correction — 6 November 2026, local only

Founder authorized the focused same-page Back/Forward fix. A single page-level `hashchange` listener calls `syncBiologyLessonHash`, restricted to Biology's subject URL. Known legacy lesson hashes resolve through stable identity mapping; existing DOM is opened without subject re-rendering or storage writes. Already-active lessons are not reopened; quiz-review hashes also scroll to the corresponding practice. Other subjects and non-lesson/unknown hashes are left unchanged. Initial-load/refresh handling remains in boot.

93 automated tests pass, including four history regression cases. Isolated real-browser checks on localhost port 8768 passed: DNA/Evolution Back/Forward, repeated Cells/DNA history, refresh, lesson/quiz Review deep links, and quiz-context Back. Unsaved DNA text survived same-page history changes. Before/after downloaded backup data and field manifests matched exactly; no console errors observed. Earlier disposable completion, answers, quiz and review records remained intact. No founder/production data was modified. Real iPhone Safari, screen-reader behavior and full keyboard history testing remain unverified. No commit, push, merge or deployment.

Primary key and stored identities are unchanged. Overview rendering writes nothing. Revert this increment's code to return to released `ec81130`; no data restore or clearing is required. Review the diff, run CI/preview and real-device checks, and obtain founder approval before merge/deployment. Preserve the six-phase Master Roadmap.
