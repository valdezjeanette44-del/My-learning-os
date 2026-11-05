# Data-safety verification and rollback

**Date:** 5 November 2026.

**Branch:** `codex/data-safety`.

**Baseline:** `52c04c9a40bade82ed28111fe802c6b1f3dc1171` (merged Step 5).

**Status:** Local implementation verified and approved for a scoped commit and review PR. This report does not authorize merge or production deployment. Biology implementation remains on hold.

## Readiness decision

- **Commit:** Founder approved a scoped development commit on 5 November 2026. Stage only the data-safety changes and this verification document; leave unrelated untracked project documentation outside the commit.
- **Merge:** Not yet recommended. Review the committed diff and run CI on that exact revision; complete the remaining mobile/browser release checks before approval.
- **Deploy:** Not authorized and not production-certified. A real iPhone Safari pass and verification of the approved deployment revision remain necessary.

## Changes reviewed

- Shared reads validate core containers, legacy notes, lesson-completion arrays and structured-note required fields. Missing legacy core fields receive in-memory defaults; reading does not rewrite storage.
- Ordinary saves refuse to overwrite an unreadable/unsupported record, retain unknown top-level fields, and surface storage errors before callers close editors or show success.
- New version 2 exports include `dataFields`, a field-presence list. This detects a mismatch between declared fields and data; it is not a checksum or authentication mechanism.
- Version 1/2 restore replaces explicitly supplied top-level fields and preserves absent fields. Version 1 also preserves the current structured Notes Library. This is a documented change from blanket replacement, not a nested merge.
- Restore checks for record changes during confirmation and saves original bytes under `myLearningOS.v2.beforeRestore` before replacing the primary record. If the recovery write fails, restore stops.
- Download controls provide normal backups, raw damaged records and the most recent pre-restore copy. Valid pre-restore data downloads as an importable version 2 backup; malformed originals remain raw text for manual recovery.
- Shared HTML entries reference `learning.js?v=34`; stylesheet and dedicated Knowledge Map script versions are unchanged.

Subject/lesson content and project definitions were compared with baseline and are identical after newline normalization. No new technologies, data migration, curriculum changes, Notes UX refinements from `10ae3c2`, or Biology implementation were introduced.

## Automated evidence

`node --test tests/*.test.mjs`: **77 passed, 0 failed** (61 existing cases plus 16 focused data-safety cases).

`node --check learning.js` and `git diff --check`: passed.

Focused cases cover corrupt/unsupported records, defaults without write-back, unknown-field preservation, unavailable storage, failed note saves, partial older backups, version 1 compatibility, new manifest mismatches, cancellation, invalid imports, concurrent changes during confirmation, failed recovery writes, failed primary restore, corrupt-record recovery, backup round trips and original-byte downloads.

## Real-browser evidence

Tests ran against a temporary localhost-only server at `http://127.0.0.1:8766`, a separate origin from production, using disposable records. No founder/production browser storage was cleared, imported or edited.

| Check | Outcome |
|---|---|
| Create structured note, save and refresh | Passed; original text and title retained |
| Save a legacy Biology note | Passed; original note also visible read-only in Notes Library |
| Submit Biology lesson practice and complete a lesson | Passed; backup contains 3/3 quiz result, attempt and review records; page retains 1/4 lessons after refresh |
| Save Plant Evolution discoveries and step completion | Passed; 1/10 and discoveries retained after refresh |
| Export via real browser download | Passed; inspected JSON contains the test notes, completion, quiz attempt, history, reviews and activity, with the field list |
| Real storage-quota failure | Passed on desktop; a 7.7-million-character disposable note failed with a visible warning, editor stayed open and original note remained visible |
| Retry failed save with smaller content | Passed; saved once, warning cleared and note survived refresh |
| Cancel restore | Passed; cancellation reported without applying backup |
| Malformed JSON restore | Passed; rejected without reload; error text is technical rather than polished |
| Older version 1 restore | Passed; imported supplied completion/legacy notes while keeping structured notes and omitted project data |
| Older version 2 restore without a manifest | Passed; supplied Notes Library replaced as requested, omitted project progress/discoveries retained |
| Download and restore pre-restore copy | Passed; original legacy Biology note, structured notes and lesson completion returned |
| Code rollback compatibility | Passed; temporary page using unmodified baseline JavaScript read the same test records and saved another note; the new app read that note afterward |
| Baseline importer compatibility | Passed in an isolated VM; unmodified baseline importer accepted a newly exported version 2 recovery backup, ignoring the additive manifest and preserving the backup's fields |
| Mobile-width ordinary Notes layout | No horizontal overflow observed; Home/Projects/Review/Notes/More navigation and test notes visible |
| Mobile-width extreme-size failure follow-up | Inconclusive: browser-control timeouts followed the oversized draft, and closing that test tab also timed out. Do not count this as a passed mobile quota test |

The standalone browser-control environment was able to reach localhost after the server was started outside the execution sandbox. No firewall, DNS, browser privacy or security settings were changed. The subsequent mobile stress test timeout is a testing limitation; its precise cause is not established.

## Restore contract and limits

- An included empty map or empty library intentionally replaces that top-level field. Omitted fields are kept; entries within an included map are not merged individually.
- The extra recovery key holds **one** previous record. A later restore replaces that recovery copy, so download it before restoring again.
- Recovery lives in the same browser origin and can be lost if browser data is cleared. External downloads remain necessary.
- Restore may be blocked by storage quota because it must first retain the old record. Do not work around this by deleting user data; export/copy data and resolve storage capacity safely.
- Validation covers known containers and selected field shapes, not every nested record, educational claim or unknown future schema.
- Ordinary cross-tab saves are not transactional; the restore confirmation check does not solve all concurrent-save conflicts.
- Failed-save draft retention is verified. General draft preservation across navigation, refresh or unrelated re-rendering is not implemented by this change.

## Rollback procedure

### Before any approved release

1. Record the reviewed feature commit and the currently deployed commit/artifact. The known source baseline is `52c04c9`; do not assume its production artifact without checking hosting evidence.
2. Run the suite and browser checks against the actual reviewed revision. Keep the pre-change artifact available.
3. Use isolated records in preview. For real users, normal backup downloads must be available before risky operations; do not treat an automated test fixture as their backup.
4. Obtain founder approval before merge/deployment. No approval is implied by this report.

### Code rollback after an approved release

1. Pause further rollout and record the failure. Preserve affected data and externally download backups before attempting repairs where possible.
2. Restore the recorded previous deployment artifact, or revert only the data-safety code changes through a reviewed feature branch/PR, with founder approval. Do not reset branches, force-push, delete work, clear storage or replace the whole workspace.
3. The primary key and record layout remain compatible with baseline. The extra recovery key is ignored by old code, and the version 2 manifest is additive.
4. Verify notes, completion, quizzes and review on the rolled-back version. Baseline lacks the new corrupt-record/save safeguards, so avoid writing over damaged data simply because the code was rolled back.

### Data recovery after a mistaken restore

1. Before another restore, use **Download pre-restore copy** from a subject's backup panel and keep the file externally.
2. Inspect its timestamp and contents. A valid recovery download can be selected through **Restore backup**; test cancellation before confirming if the file is uncertain.
3. Included fields replace current matching fields; fields absent from older files remain. Recovery is not an automatic cross-device or exact historical database rollback.
4. Verify original notes, project progress, quiz attempts and review schedules afterward. Retain both downloaded copies until verification is complete.
5. If the recovered original is malformed raw text, preserve it for manual repair; do not import it as a normal backup or overwrite it with defaults.

## Remaining release gates

- Review/stage a clearly scoped commit, excluding temporary fixtures and unrelated documentation as appropriate.
- CI and exact-revision preview review; no remote branch or preview was published at the local-verification checkpoint. Subsequent commit/PR results must identify the reviewed revision explicitly.
- Real iPhone Safari check for note save/refresh, completion, normal backup/download/import, failed-save messaging where safely reproducible and navigation.
- Recheck the mobile stress-test behavior separately if very large notes are intended to be supported; a product input-size policy has not been selected.
- Founder approval for merge and deployment. No claim of full commercial readiness is made.
