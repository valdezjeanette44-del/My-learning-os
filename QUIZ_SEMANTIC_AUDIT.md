# Quiz Semantic Audit — Initial Review

Branch: `audit/quiz-semantic-review`
Scope: `learning.js`; 8 subjects × 4 lessons × 3 question skills = 96 generated questions.
Status: Initial content review completed; targeted feedback improvement recommended. No quiz implementation changes made.

## Structural checks

- All 32 lessons have entries in the scenario bank, transfer bank, misconception bank, concept-note bank, misconception-stem bank, and topic-label bank.
- All 32 scenario entries contain a prompt, a keyed answer, and three intended distractors.
- All 32 transfer entries contain a prompt, a keyed answer, and three intended distractors.
- No missing transfer entries, duplicate strings within transfer entries, or unexpected transfer-array lengths were found in the automated checks.
- The generator produces one remember, one understand, and one apply question per lesson. It reorders choices for retry rather than changing the keyed answer.

## Content review — initial pass

The reviewed examples across Physics, Chemistry, Biology, History, Economics, Business, Technology, and Philosophy generally have a defensible intended answer and distractors that represent recognizable misconceptions. I did not find a clear factual error in the sampled question-answer pairs below. This is not a claim that every option has been independently verified against a full subject-matter reference.

Examples checked:
- Physics: speed versus velocity; falling-book energy transfer; gravity and orbital motion.
- Chemistry: melting versus chemical change; element identity by proton count; covalent versus ionic bonding; balancing atom counts.
- Biology: plant response to light; selective cell membrane; heritable variation in natural selection.
- History: source perspective and purpose; archaeological context; surplus food and specialization; trade-route exchange.
- Economics: opportunity cost; supply and demand with “all else equal”; comparative advantage.
- Business: revenue less product/delivery and advertising costs; customer willingness to pay; low-cost product testing.
- Technology: client/server requests; ordered algorithms; verification of AI output.
- Philosophy: justified belief versus lucky true guess; ethical trade-offs; overgeneralizing from one example.

## Confirmed improvement opportunity: feedback for incorrect choices

In `lessonQuizQuestions()`, every incorrect option's reason is assembled from the same generic template for its skill:
- Remember: says the option conflicts with the key idea.
- Understand: says it does not explain the situation as well as the keyed answer.
- Apply: says it does not fit the new situation as well as the keyed answer.

This feedback is technically consistent but not diagnostic. It does not explain why the selected misconception is wrong, and the feedback may repeat a long correct answer without teaching the concept. Recommend a follow-up change that supplies a concise, option-specific reason for each distractor, with a safe fallback for any missing reason. Keep question wording, answer keys, scoring, retry ordering, and the live app behavior unchanged in that targeted change.

## Wording and nuance notes to preserve

- Physics: the thrown-ball item appropriately mentions both gravity and possible air resistance; avoid implying air resistance is always the dominant force.
- Chemistry: the bubbles item correctly avoids claiming that bubbles alone prove a specific reaction; retain the cautious wording.
- Biology: natural-selection answers correctly condition population change on the trait being heritable.
- History: interpretations of artifacts and conflicting sources are appropriately cautious rather than claiming certainty from one source.
- Economics: supply-and-demand questions include “all else equal” or equivalent cautious wording; preserve that qualification.
- Business: profit examples explicitly say “before other costs,” avoiding the misleading claim that gross difference is final profit.
- Technology: AI verification questions correctly emphasize checking claims against reliable sources.
- Philosophy: the questions distinguish truth from justification and invite evaluating reasons rather than treating confidence or majority opinion as proof.

## Recommendation / next step

Before changing production quiz code, add option-specific feedback reasons for the 96 generated questions and run regression checks confirming:
1. 96 questions still generate;
2. every question has exactly four distinct options and exactly one correct option;
3. retry reordering preserves the same correct answer;
4. scoring and review display remain unchanged;
5. all eight subjects and all 32 lessons render successfully.

No changes to `main` or the live deployment are included in this audit.
