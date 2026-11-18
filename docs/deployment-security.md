# Deployment packaging correction — local implementation

## Verification contract v1.0 — security-maintenance increment, 18 November 2026

Status: local implementation, uncommitted; execution evidence must be recorded
separately. This increment starts at PR #47 commit
`554e7d3016c4c9e34003dfd7c4fa656475464aaa`. It does not contain Understand,
animal-cell artwork or application changes. The historical sections below remain
audit evidence, not a current deployment claim.

### Three independent questions

1. Historical integrity: the original snapshot remains byte-equivalent (checkout
   CRLF allowed) to its blob in pinned PR #47. Its original application/Tutor/CI
   hashes are evaluated against raw blobs in original source commit
   `7b998c5b1ba63f566c8d793aa85c004aaec06f16`, never current feature files.
   Original expected hashes are not regenerated. Missing Git objects fail.
2. Ongoing security: exactly 62 independently classified public paths, 15 HTML
   pages, private/internal exclusions, source/output symlink rejection, safe fixed
   output handling, missing-input preservation, stale-output removal, runtime
   references and exact packaged bytes remain mandatory tests. Only the existing
   public photography credits are an exception to internal Markdown exclusion.
3. Candidate identity: exact-candidate evidence requires an externally approved
   full candidate SHA AND a separately approved trusted policy SHA. Neither is
   loaded from a candidate-owned approval file or inferred from a passing test.

### Provisional verification, before commit

With explicit permission to create disposable test/build fixtures:

```text
node --test tests/*.test.mjs
node scripts/verify-candidate.mjs --mode provisional
```

The verifier reads the current worktree inputs and records HEAD only as its
baseline. It builds in a guarded OS-temp fixture and cleans that fixture. It
does not create project dist-public output, change either existing workspace,
or save a digest manifest into the repository. Its JSON output explicitly says
uncommitted/integration evidence, not approved exact-candidate evidence. Private
untracked files are neither inputs nor approval authority. Packaging tests plant
synthetic internal canaries; they never need real private-document contents.

### Committed and remote verification, after separate authorization

Record the repository, candidate SHA, base SHA, trusted policy SHA, reviewed scope
and founder approval outside candidate source (for example in the release approval
and Actions dispatch record). The verifier requires HEAD to equal the supplied
candidate SHA, and all security-critical policy files to match both the trusted
Git revision and the working checkout. It rejects changed policy and dirty public
inputs. Textual checkout CRLF is accepted only when it represents the same source;
packaging inputs are materialized from raw candidate Git blobs and output is
compared byte-for-byte to those blobs. The report includes SHA-256 and size for
every public path. Digests describe evidence; they do not approve new files.

Release verification must execute the verifier extracted from the externally
approved policy commit, using its `--root` argument to inspect the candidate.
Do not trust a candidate-modified verifier merely because it claims a pass.
The existing manual workflow performs that extraction into RUNNER_TEMP, with
required `approved_candidate_sha` and `trusted_policy_sha` inputs. It uses full
history so the fixed historical objects are available; unavailable objects fail.
No network fallback, dependency, deployment step or secret is introduced by the
verifier. GitHub checkout itself continues to require repository access.

The workflow reports event SHA and PR head/base. PR runs retain their integration
checkout and are labelled provisional/integration evidence, not feature-head
release approval. Push-main runs likewise do not infer founder acceptance.
Exact feature-head evidence uses manual dispatch on the verified feature branch
and must match the separately approved SHA. A branch movement causes failure.

### Trust bootstrap and future policy changes

This new verifier does not exist at PR #47. Therefore that commit cannot serve as
its trusted policy revision. After separate commit authorization, an independent
review must approve the new security commit as the initial policy revision.
For that bootstrap, candidate and policy SHA may be the same ONLY with explicit
external approval of both roles. Passing its own CI is not that approval.
Future changes to inventory, packager, verifier, security tests, workflow or config
require explicit review and a new approved policy revision. The policy cannot
silently accept animal-cell.webp: this increment retains the original 62 files.

The manual workflow remains code under review. If it changes, inspect its diff and
run the pinned verifier independently; these checks do not provide a malicious-code
sandbox or cryptographic proof of founder identity. Branch protection/settings are
unchanged. External approval and review of the exact policy remain essential.

### Failure and learning-data guarantees

Permission errors (including EPERM during file symlink/junction creation), missing
objects, inventory differences, changed/missing/extra bytes and SHA mismatches are
failures, never skips. Re-run in an explicitly approved capable environment if
needed. Existing output is preserved for prevalidation/missing-input failures;
atomic recovery from arbitrary mid-copy I/O failure is not claimed. Failed output
must not be deployed. Output/source junction tests remain intact, with an added
file-symlink test. Historical assessments, learning-data compatibility and existing
storage/backup tests remain unchanged. No founder browser data is accessed.

Before release: full suite, provisional evidence, independent policy review,
exact-candidate CI, separately authorized protected-preview/output verification,
and founder release approval are required. Authentication redirects do not prove
private-file exclusion. Native Tutor bundling and hosted routes remain separate
deployment checks. No commit, push, PR, merge or deployment is authorized here.

### Local execution evidence — 18 November 2026

Founder separately approved the full suite and provisional verifier. Executed in
the dedicated codex/deployment-verification-contract worktree, not Antigravity:

- Full suite: 236 tests; 235 passed, one failed, zero skipped. The new approved-file
  symlink test failed at fixture creation with Windows EPERM. Original directory
  junction/output tests and historical/learning compatibility tests passed. This
  is incomplete security verification, not a green suite or an application defect.
  The file-symlink assertion is retained unchanged and must pass in a capable
  environment; no system permission changes or test skips were made.
- Provisional verifier: passed, exactly 62 public files; candidateSha and policy
  SHA are null and identityAndPolicyMatched is false, as required before commit.
- JavaScript syntax and git diff whitespace checks passed.
- No committed-candidate positive end-to-end run or hosted CI/deployment was
  performed. Those require a future committed revision, independent approval of
  candidate/policy SHAs and separate publication/workflow authorization.
- Antigravity retains its four tracked modifications, new image and new Understand
  tests; the original workspace and private founder documents were not edited.

---

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
