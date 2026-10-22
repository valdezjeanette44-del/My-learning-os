# Phase 1 — Reliability fixes

**Branch:** `phase-1/reliability-fixes`  
**Base commit:** `8ab272e5341a39701314a2f7fd091b713686bca8`  
**Scope:** Shared asset consistency and repeatable static integrity checks.

## Changes made

- Aligned `styles.css?v=3` to `styles.css?v=10` on `projects.html`, `review.html`, `search.html`, and `tutor.html`.
- Added `tests/static-integrity.test.mjs`, using Node's built-in test runner to check expected entry pages and shared asset references.
- Added a GitHub Actions workflow to run those static checks on pull requests and pushes to `main` or `phase-1/**`.

## Checks covered

- All 14 known HTML entry pages exist.
- All 14 reference `styles.css?v=10`.
- The 13 standard entry pages reference `learning.js?v=27`; `knowledge.html` intentionally uses its dedicated `knowledge-map.js?v=8` renderer to avoid rendering the same app container twice.
- The Knowledge Map page references `knowledge-map.js?v=8` and `knowledge-map.css?v=8`, without also loading the shared `learning.js` renderer.
- Core shared assets exist.

## Important limits

These are static integrity checks, not browser end-to-end tests. They do not verify quiz correctness, actual button behavior, localStorage persistence, responsive layout, or Knowledge Map line selection. Those still require functional tests and a manual iPhone Safari smoke test.

No changes have been made to `main` or the production deployment. The Tutor API remains intentionally deferred pending API-key setup.
