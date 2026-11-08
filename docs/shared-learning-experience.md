# Shared Learning Experience Specification v1.0

Status: founder-approved standard, 8 November 2026. Applies to enhanced subjects; implementation and release acceptance are tracked separately. Preserves the established six-phase Master Roadmap. Biology is an initial reference, not the final ideal.

## Framework
Discover → Understand → Practice → Apply → Review → Progress describes learning behaviour, not identical layouts or six mandatory tabs.

| Stage | Application mapping | Acceptance criterion |
|---|---|---|
| Discover | Subject overview, opening question, existing exploration links | Purpose and next available action are clear without competing primary buttons. |
| Understand | Objectives, core explanations, illustrations, optional depth | Every assessed prerequisite is taught before assessment and outside optional disclosures. |
| Practice | Written explanation, existing quiz, appropriate temporary activities | Saving/scoring status is clear; feedback explains reasoning. |
| Apply | Transfer scenario, explanation or existing project | Learner uses the idea in a different situation; no mandatory new project system. |
| Review | Existing dashboard and schedules | Existing keys/rules persist; links open the intended lesson or quiz. |
| Progress | Explicit completion, first-unfinished action, next lesson | Completion persists after refresh and represents activity, not mastery. |

## Teaching and scientific accuracy
- Engaging opening question and two or three concise objectives.
- Self-contained core teaching, at least one concrete example and meaningful practice opportunity.
- Diagram assumptions, scale limitations and important exceptions are explicit; adjacent selectable text conveys essential information.
- Authoritative sources support scientific explanations.
- Optional depth is labelled and initially collapsed; no assessed prerequisite is hidden there.
- Concise synthesis and valid next action, including an appropriate final-lesson destination.
- No guaranteed reading-time claims without evidence.

## Assessment and feedback
Historical assessment definitions, title-based lookups, grading and attempt records remain protected. Missing answers receive actionable feedback without creating an attempt. Written checking explicitly saves; keyword feedback must disclose that it cannot reliably assess reasoning or mastery.

Retry missed retains correct selections and focuses the first missed question. Restart clears current selections and focuses Question 1. Neither creates a saved attempt by itself. Correct/incorrect/all-correct states, repeated retries, focus and both motion preferences require tests. Exact labels may preserve already accepted subject wording. Temporary ungraded practice never autosaves and clears stale explanations when its inputs change.

Three distinct concepts must remain clear:
- Confidence: the learner's self-report about explaining or recalling an idea.
- Quiz correctness: performance on a particular set of questions/attempt, not proof of general mastery.
- Lesson completion: explicit recorded learning activity, independent of confidence or a perfect quiz score.

The existing stored mastered field and legacy self-marked scores must not be reinterpreted or migrated under this specification. User-facing wording should avoid implying proven mastery. Changing historical grading or stored semantics needs separate approval.

## Accessibility and responsive acceptance
- No horizontal page overflow at 320px and 375px.
- Essential controls can be scrolled and focused clear of fixed navigation; test iPhone keyboard and safe-area clearance.
- Keyboard access without drag-only interactions; visible focus and predictable section/retry focus.
- Ordinary text contrast at least 4.5:1; necessary control boundaries/indicators at least 3:1.
- Scientific labels readable at rendered size; colour is supplemented with text, signs or patterns.
- Reduced motion is respected on all enhanced navigation paths.
- Verify actual 200% zoom, 150% text enlargement, Windows Narrator and real-iPhone behaviour.
- Programmatic status feedback plus verified screen-reader announcements, not DOM inference alone.

Accessibility acceptance is deferred until before production release. It is not waived, certified or marked passed by this document. Automated/source checks do not establish WCAG conformance; report each manual check and its tested SHA.

## Data safety and navigation
- Preserve historical lesson slots, stable IDs, assessment definitions, grading, localStorage myLearningOS.v2, Notes, Review scheduling, unknown metadata, progress records and backup/restore formats unless separately approved migration/recovery work is undertaken.
- Rendering, navigation and optional disclosure toggles perform no learning-data writes.
- Drafts survive in-page completion/Review rebuilding without silent saving; refresh/leaving can still discard unsaved drafts and must not be described as automatic resume.
- Explicit-save contracts and visible failure recovery remain intact.
- Export/restore tests retain unknown records and fields except intended user-authorized changes.
- Legacy links, browser history, Review and Knowledge Map links resolve to original identities.

## Architecture and rollout
Keep historical catalog/assessment sources separate from enhanced teaching. Prefer small reusable focus/scroll and presentation mechanics with subject-specific content and diagrams. Avoid premature framework/database adoption or a universal rendering engine. Extract one shared mechanism at a time with behaviour/output regression coverage.

Apply standards incrementally: older subjects are not automatically upgraded. Subject-specific illustrations, examples, layout and application activities remain appropriate differences. New projects, tracking, contextual notes, checkpoints, infrastructure and broad navigation redesign require separate approval.

## Verification gates
For each increment: full automated suite, historical source/hash and storage compatibility checks, subject isolation, initial-load/history links, feedback states, zero unintended writes, failed saves and backups where affected. Use disposable data. Before production: exact-candidate CI, protected preview, documented founder/device/accessibility acceptance and explicit merge/deployment authorization. Never infer production approval from implementation approval.
