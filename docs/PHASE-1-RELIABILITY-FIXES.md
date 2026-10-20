# Phase 1 — Reliability fixes

**Branch:** `phase-1/reliability-fixes`  
**Base commit:** `8ab272e5341a39701314a2f7fd091b713686bca8`  
**Scope:** Low-risk static-page cache consistency fix.

## Change made

The following pages previously referenced `styles.css?v=3` while the homepage, subject pages, and Knowledge Map referenced `styles.css?v=10`:

- `projects.html`
- `review.html`
- `search.html`
- `tutor.html`

Updated those four references to `styles.css?v=10` so all 14 HTML entry pages use the same cache-busting version for the shared stylesheet. This reduces the chance that a browser serves a stale stylesheet on some pages after CSS changes.

## Validation performed

- Fetched all 14 HTML entry pages from this branch after the edits.
- Confirmed every page references `styles.css?v=10`.
- Confirmed all pages continue to reference `learning.js?v=27`.
- Confirmed `knowledge.html` still references `knowledge-map.js?v=8`.
- No changes were made to `main`, the recovery checkpoint, the Tutor API, or user progress storage.

## Not yet verified

- No live deployment or browser/device regression test has been run for this branch.
- This branch has not been merged into `main`; production is unchanged.
- The tutor still requires `OPENAI_API_KEY` in Vercel to generate AI responses. That setup is intentionally deferred.

## Manual smoke test before merging

1. Open Home and each of the eight subject pages.
2. Open Projects, Review, Search, and Knowledge Map.
3. Check the layout and navigation on iPhone Safari after a hard refresh/reload.
4. Confirm lesson progress and notes remain intact.
5. Verify Tutor UI loads and continues to show the expected configuration message until API setup is intentionally completed.
