# Step 2 — Regression checklist

**Roadmap:** Original stabilization roadmap  
**Branch:** `stabilization/step-2-regression-tests`  
**Purpose:** Define repeatable checks for current behavior before making further bug fixes.

## Scope and safety

- This step adds a regression checklist and tests for stable, inspectable contracts.
- It must not change application behavior, lesson content, saved-data format, or production.
- Static tests verify source-level contracts only. They do not prove browser interactions work; manual and runtime checks remain necessary.
- Do not clear browser storage during testing. Use a separate browser profile or test data when possible so Jeanette's existing progress is protected.

## Automated checks already present

- [x] All 14 expected HTML entry pages exist.
- [x] All entry pages reference the shared stylesheet and learning script versions.
- [x] Knowledge Map loads its dedicated script.
- [x] Core shared assets exist.

## Regression checklist

### A. App entry points and navigation
- [ ] Homepage loads and links to all eight subject pages.
- [ ] All eight subject pages load their course content.
- [ ] Each subject exposes four lessons (32 lessons total).
- [ ] Lesson deep links open the expected lesson.
- [ ] Knowledge Universe, Projects, Review, Search, and Tutor entry pages load.
- [ ] Primary and mobile navigation links point to the expected routes.

### B. Lesson completion and saved progress
- [ ] Marking a lesson complete updates its completion state and visible progress.
- [ ] Reopening a completed lesson preserves its state.
- [ ] Refreshing a page preserves progress.
- [ ] Knowledge Universe progress reflects the same saved completion state.
- [ ] Progress remains available after navigating between app pages.
- [ ] Do not use a preview URL's separate browser storage as proof that production progress was lost.

### C. Notes and local data
- [ ] Notes can be created or edited using the existing UI.
- [ ] Notes remain after navigating away and returning.
- [ ] Notes remain after a page refresh.
- [ ] Existing local-storage key/schema remains compatible.
- [ ] Backup/export UI, if used, preserves the existing data shape.

### D. Lesson quizzes
- [ ] Each tested question allows answer selection.
- [ ] Correct answers receive correct feedback.
- [ ] Incorrect answers identify the correct answer and give a relevant explanation.
- [ ] Score counts match the selected answers.
- [ ] Retry behavior works and missed questions can be retried as designed.
- [ ] Feedback punctuation is clean (no doubled terminal punctuation).
- [ ] Answer keys and explanations match the actual question.

### E. Review, Projects, and Search
- [ ] Review page loads and displays due items based on saved review data.
- [ ] Opening a review item navigates to the correct subject/lesson.
- [ ] Projects page loads, and project details open correctly.
- [ ] Search page loads and returns relevant existing content.
- [ ] Empty search results and empty review states remain usable.

### F. Knowledge Universe
- [ ] Graph and List views can be selected.
- [ ] Subject nodes/cards can be selected.
- [ ] Search and filters work.
- [ ] Zoom and Reset controls work.
- [ ] Connection explanations can be opened from the supported connection controls.
- [ ] Keyboard focus and keyboard activation work where provided.
- [ ] Layout remains usable on iPhone Safari.
- Note: connection-line tapping is recorded as a manual check; do not expand scope to fix it unless it is explicitly included in the current approved step.

### G. Deployment and device checks
- [ ] Automated checks pass on the branch.
- [ ] Preview is tested before merge.
- [ ] Production source commit is confirmed in Vercel after merge.
- [ ] On iPhone Safari, verify navigation, lesson completion, quiz interaction, notes, layout overflow, and persistence after refresh.
- [ ] Verify desktop behavior for the same critical flows.

## Exit criteria for Step 2

1. Static regression tests are repeatable and pass.
2. The checklist covers the app's important existing behaviors.
3. Tests clearly distinguish source-level assertions from browser/runtime verification.
4. No application code or user data is changed by this step.
5. Any behavior not yet automated is explicitly left for manual testing or the relevant later roadmap step.
