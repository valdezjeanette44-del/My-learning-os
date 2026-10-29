# Quiz distractor and feedback audit

**Scope:** `learning.js` on `audit/quiz-semantic-review`; generated question variants for all 32 lessons.

## Coverage

- 8 subjects, 4 lessons per subject.
- 96 base questions (Remember, Understand, Apply).
- 288 wrong-answer options reviewed for how their feedback reason is assigned.
- The generator currently creates 3 distinct distractors per question and passes the structural checks.

## Findings

The helper `lessonQuizDistractorReason` selects explanations using regular-expression keyword rules, then falls back to the lesson's `conceptText`. That concept text is not authored for each individual distractor. In many cases the resulting explanation restates the general concept or correct answer instead of explaining the specific misconception in the selected option.

A generated-code audit found **135 of 288 distractor feedback entries (46.9%)** used the generic fallback path. This is a risk flag, not a claim that every one of those explanations is factually wrong. The other 153 entries matched a keyword rule; those are not automatically verified as semantically correct either.

## Fallback-path counts by subject

| Subject | Fallback-path entries | Distractors checked |
|---|---:|---:|
| Physics | 3 | 36 |
| Chemistry | 9 | 36 |
| Biology | 28 | 36 |
| History | 22 | 36 |
| Economics | 6 | 36 |
| Business | 11 | 36 |
| Technology | 26 | 36 |
| Philosophy | 30 | 36 |
| **Total** | **135** | **288** |

## Lessons with fallback-path feedback

| Subject | Lesson | Flagged entries / 9 |
|---|---|---:|
| Physics | What does physics study? | 3 |
| Chemistry | What is matter made of? | 5 |
| Chemistry | Atoms and elements | 1 |
| Chemistry | Chemical bonds | 1 |
| Chemistry | Chemical reactions | 2 |
| Biology | What is life? | 6 |
| Biology | Cells: the basic unit | 8 |
| Biology | DNA and heredity | 7 |
| Biology | Evolution by natural selection | 7 |
| History | How do historians study the past? | 6 |
| History | Prehistory and archaeology | 6 |
| History | Agriculture and civilization | 7 |
| History | Empires and exchange | 3 |
| Economics | What is economics? | 5 |
| Economics | Trade and specialization | 1 |
| Business | What is a business? | 5 |
| Business | Understanding customers | 1 |
| Business | Testing a business idea | 5 |
| Technology | What is technology? | 6 |
| Technology | How does the internet work? | 9 |
| Technology | What is an algorithm? | 3 |
| Technology | What is artificial intelligence? | 8 |
| Philosophy | What is philosophy? | 8 |
| Philosophy | How do we know? | 8 |
| Philosophy | Ethics and choices | 6 |
| Philosophy | Arguments and reasoning | 8 |

Lessons absent from this table had zero entries on the generic fallback path; their keyword-selected explanations still need semantic review.

## Representative issue

For a question about a ball slowing while moving upward, the distractor “The ball's mass gradually decreases” can receive the explanation for the correct answer (“Gravity pulls downward; air resistance may also affect the ball.”). That tells the learner the right fact but does not directly explain why the mass-based misconception is wrong.

## Root cause

Feedback is inferred from answer wording and broad topic keywords rather than stored alongside the specific distractor. The code can therefore select a broadly related explanation—or a lesson-level concept note—that is not tailored to that distractor.

## Recommended fix

1. Store an explicit, reviewed explanation beside each wrong option in the quiz-bank data.
2. Have rendering and retry variants carry the option's own explanation with it, instead of regenerating a reason from keywords.
3. Add tests for every generated distractor asserting that its feedback is present, distinct from a simple restatement of the correct answer, and stable after option shuffling/retry.
4. Have a human content review check factual accuracy and pedagogical quality. Automated structural tests alone cannot establish that a scientific, historical, or philosophical explanation is correct.

**Safety:** This audit report does not change production behavior; it is documentation on the audit branch.
