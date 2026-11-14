# Deployment packaging correction — local implementation

Date: 14 November 2026. Status: local, uncommitted, not published.

## Baseline and scope

Branch: `codex/deployment-security-hardening`, created from exact production
`7b998c5b1ba63f566c8d793aa85c004aaec06f16` (PR #46). The commit was fetched
explicitly; unrelated development branches and existing untracked foundation
documents were preserved. No application, curriculum, CI, runtime, storage, Tutor,
dashboard, visibility, permission or historical-deployment changes are included.

The previous read-only audit confirmed 46 internal files served from production:
seven docs, four root quiz audit/checkpoint Markdown files, 34 tests/fixture files,
and one workflow. README was not served. Public image credits must remain public.
This correction affects future deployments only; production is still unchanged.

## Publication boundary

`scripts/public-files.mjs` explicitly lists 62 approved static files: 15 HTML entry
pages, four JS/CSS files, one web manifest, two icons and 40 assets (including
scientific attribution and photography provenance). No recursive copy or glob is
used. Future files are excluded until individually reviewed and added deliberately.

`node scripts/build-public.mjs` generates only `dist-public/`, replacing stale
output after validating every input. Sources and source-directory ancestors must
be regular files/directories, never symlinks. Output must be a real directory at
the fixed resolved project-root child `dist-public`; the script never deletes any
other directory. Input bytes are copied without rewriting or normalization.
Do not put hand-authored content in this generated directory.

`vercel.json` keeps the Other preset (`framework: null`), selects this build command
and output directory. Deployment protection remains a dashboard setting, unchanged
by this configuration. It adds no routing,
redirect, function, runtime, install, cache or environment overrides. `.gitignore`
excludes generated output. No package manifest or dependency is introduced.

`api/tutor.js` remains in the root `api/` directory for Vercel's native Node function
detection; it is never copied into static output. Its production-only Origin,
server-side environment access, 405/403 handling and missing-key 503 are unchanged.
Vercel must verify native function generation in a protected preview before release.
No upstream AI request or secret configuration is part of this work.

## Verification

- Existing suite: 221 passing tests before this change; all retained unchanged.
- New suite: seven deployment tests; total 228 pass, zero failures/skips.
- Additional generated-output run: 21 existing Cells Discover, subject journey and
  static-integrity tests pass with working directory `dist-public/`.
- Output tests independently classify the fixed production inventory, reject all
  46 internal files and README, and require exactly 62 public files/15 entry pages.
- A checked-in baseline path/blob-hash snapshot allows tests to run in shallow CI
  without fetching history. It also protects application, Tutor and workflow source
  against unintended changes (allowing checkout line-ending differences only).
- Disposable tests plant future internal files (including under assets), stale
  output and directory symlinks; verify exclusion, safe rejection, deterministic
  rebuilding, and exact byte copies. Source fixture files remain intact.
- Reference checks cover entry-page links/scripts/icons, manifest, CSS resources,
  literal JS assets, rendered Cells HTML/srcset and dynamic Biology photography.
- Offline Tutor tests confirm 405, 403 and missing-key 503 with zero upstream calls.
- Windows sandbox denied junction creation; the complete suite was rerun outside
  that sandbox and passed. No permissions/settings were changed for the test.

Commands:

```text
node scripts/build-public.mjs
node --test tests/*.test.mjs
```

`scripts/verify-deployment.mjs` performs GET-only anonymous checks of the supplied
project origin: root and 62 public paths must match local source bytes; baseline
internal and newly introduced development paths must return 404; Tutor GET must
return 405. It prints no response bodies or credentials and never POSTs. Redirects,
authentication responses and network failures cannot count as successful exclusion.

```text
node scripts/verify-deployment.mjs https://my-learning-os.vercel.app
```

Do not use that production command to claim this unpublished fix is deployed.
Against a protected preview it will report authentication as unverified. Inspect
the build output through authorized access and verify absent files behind protection;
do not weaken protection or add credentials to URLs for this script. Preview toolbar
HTML injection could also cause byte comparison failures requiring manual review.

## Approval and release gates

No commit, push, PR, merge or deployment is authorized by this local implementation.
A push can trigger automatic preview publication: obtain separate founder approval
before any publication. Keep CI Node and Ubuntu settings exactly as they are.

Before production approval:

1. Review the exact files and allowlist; run 228 tests in CI at that revision.
2. In a separately approved protected preview, confirm 62 expected static files,
   no docs/tests/workflows/config/scripts, and one native Tutor function.
3. Check all 15 routes, nested subjects, query/hash navigation, images/srcset, credits,
   manifest, Knowledge Map, Notes, Projects, Review and Cells Discover.
4. GET Tutor must remain 405. No key is to be added. A preview POST may return 403
   because its Origin differs; inspect missing-key behavior without paid AI traffic.
5. Repeat six real-iPhone checks and inspect saved production records without
   clearing/restoring storage. Use isolated data for write-based behavior tests.
6. With separate merge/deployment approval, verify the exact production SHA and
   alias, unchanged origin, genuine internal-path 404s, public assets and inactive API.

Existing browser data, key `myLearningOS.v2`, lesson identities, quizzes and review
contracts have no migration. No learner browser profile or learning record was
accessed during local verification. Simulated tests are not real Safari acceptance.

## Compatibility, residual exposure and rollback

Vercel documents that only the configured Output Directory is served statically:
https://vercel.com/docs/builds/configure-a-build
Native Node function documentation:
https://vercel.com/docs/functions/runtimes/node-js
No local Vercel CLI/build or hosted preview was run. Dashboard overrides, function
bundling and live route behavior remain release gates, not established facts.

Current and historical deployments still contain their prior output. Standard
Protection protects deployment URLs but leaves production domains public. Inventory
this project's immutable production/preview URLs, branch/custom aliases, exceptions
and retention settings. Test anonymously and behind authorized protection. Two
previously checked historical preview URLs required authentication, but that is
not a complete deployment inventory. No historical deployment is deleted here.

Rollback readiness: record baseline deployment `AMWEgj5NPdPtJWdeawa8gJQ6FiBB` and
production SHA above. A founder-approved alias rollback would restore availability
but also restore the known disclosure. Prefer a corrected packaging build when
possible. Source rollback removes only these packaging additions; existing app
files require no restoration or data migration. No rollback action is performed.

Private GitHub visibility is separate and unchanged. It cannot hide public client
code or erase old deployment copies. GitHub Free protections and remaining migration
checks still require founder decisions. The development roadmap is unchanged.

## Exact public allowlist

The following paths are copied to the same URL paths, with no transformation.

```text
IMG_0224.png
assets/biology/cell-comparison-mobile.svg
assets/biology/cell-comparison.svg
assets/biology/dashboard-cells.svg
assets/biology/dashboard-dna.svg
assets/biology/dashboard-evolution.svg
assets/biology/dashboard-hero.svg
assets/biology/dashboard-life.svg
assets/biology/gene-to-trait.svg
assets/biology/life-and-seed.svg
assets/biology/membrane-exchange-mobile.svg
assets/biology/membrane-exchange.svg
assets/biology/natural-selection.svg
assets/biology/photography/CREDITS.md
assets/biology/photography/cells-320.jpg
assets/biology/photography/cells-640.jpg
assets/biology/photography/dna-320.jpg
assets/biology/photography/dna-640.jpg
assets/biology/photography/finch-320.jpg
assets/biology/photography/finch-640.jpg
assets/biology/photography/hero-mobile-480.jpg
assets/biology/photography/hero-mobile-800.jpg
assets/biology/photography/hero-wide-1200.jpg
assets/biology/photography/hero-wide-600.jpg
assets/biology/photography/manifest.json
assets/biology/photography/seedling-320.jpg
assets/biology/photography/seedling-640.jpg
assets/chemistry/atom-structure.svg
assets/chemistry/covalent-water.svg
assets/chemistry/element-isotope-ion.svg
assets/chemistry/ionic-structure.svg
assets/chemistry/reaction-atom-balance.svg
assets/chemistry/reaction-energy.svg
assets/chemistry/water-ice.svg
assets/chemistry/water-liquid.svg
assets/chemistry/water-molecule.svg
assets/chemistry/water-states-wide.svg
assets/chemistry/water-states.svg
assets/chemistry/water-vapour.svg
assets/projects/human-evolution-cover.png
assets/projects/plant-evolution-cover.png
icon.svg
index.html
knowledge-map.css
knowledge-map.js
knowledge.html
learning.js
manifest.webmanifest
notes.html
projects.html
review.html
search.html
styles.css
subjects/biology/index.html
subjects/business/index.html
subjects/chemistry/index.html
subjects/economics/index.html
subjects/history/index.html
subjects/philosophy/index.html
subjects/physics/index.html
subjects/technology/index.html
tutor.html
```
