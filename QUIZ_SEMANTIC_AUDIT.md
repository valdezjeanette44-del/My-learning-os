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


## Detailed semantic audit — Batch 1: Physics and Chemistry

Reviewed all 8 lesson topics in these two subjects across the remember, understand, and apply question templates, including their keyed answers, distractors, and explanations.

### Physics — findings
- **What does physics study?** The thrown-ball scenario correctly identifies gravity as the continuing downward force and leaves room for air resistance. The remember answer accurately describes observation, experiments, and models.
- **Motion and speed:** The cyclist question correctly distinguishes scalar speed from velocity, which includes direction. The train calculation is correct: 120 km ÷ 2 h = 60 km/h.
- **Energy:** The falling-book item correctly describes gravitational potential energy decreasing as kinetic energy increases, while allowing some energy to be dissipated. The elastic-band item preserves energy accounting and mentions sound/heat.
- **Gravity and orbits:** The satellite and spacecraft items correctly explain that gravity changes direction while sideways motion sustains an orbit; the phrasing avoids saying gravity disappears in space.
- **Distractor quality:** Wrong choices represent identifiable misconceptions (e.g., speed includes direction, energy disappears, gravity pushes outward) and are clearly distinguishable from the intended answers.
- **No confirmed factual/keying errors found in this batch.**

### Chemistry — findings
- **What is matter made of?** Melting ice and evaporation are correctly described as physical changes; the answer distinguishes changes of state from formation of new substances.
- **Atoms and elements:** The six-proton atom is correctly identified as carbon. Atoms with eight protons but different neutron counts are correctly described as oxygen isotopes.
- **Chemical bonds:** Shared electron pairs are correctly identified as covalent bonding; electron transfer followed by attraction between oppositely charged ions is correctly identified as ionic bonding. The introductory explanations are simplified but appropriate for the course level.
- **Chemical reactions:** Balancing atom counts with coefficients is correct. The bubbles question appropriately says bubbles may indicate a reaction but are not sufficient by themselves to establish exactly what occurred.
- **Distractor quality:** The alternatives reflect common misconceptions about melting, proton/neutron identity, electron sharing/transfer, and conservation of atoms.
- **No confirmed factual/keying errors found in this batch.**

### Batch 1 disposition
No question wording or answer-key edits are recommended for Physics or Chemistry based on this pass. Keep the cautious qualifications already present. This is a content audit, not a replacement for automated generation and live-app regression tests.


## Detailed semantic audit — Batch 2: Biology and History

Reviewed all 8 lesson topics in these two subjects across the remember, understand, and apply question templates, including keyed answers, distractors, and explanations.

### Biology — findings
- **What is life?** Plant response to light is correctly treated as a response to the environment. The transfer question correctly explains that a dormant seed can remain living despite little visible activity.
- **Cells: the basic unit:** The cell membrane is correctly identified as selectively regulating exchange. DNA enclosed in a nucleus indicates a eukaryotic cell; the question does not incorrectly conclude that every eukaryote is a plant.
- **DNA and heredity:** The pigment example appropriately links a gene to a cellular process rather than suggesting genes directly choose appearance or change an organism's atomic proton counts. The sibling question appropriately accounts for inherited genetic combinations plus development and environment.
- **Evolution by natural selection:** Both questions correctly frame population change in terms of heritable traits and differential reproduction. The pesticide example avoids implying that individual insects intentionally develop a needed mutation.
- **Distractor quality:** Incorrect choices reflect common misconceptions about plant life, cell structures, genetic determinism, and evolution by need. They are clearly less defensible than the keyed answers.
- **No confirmed factual/keying errors found in this batch.**

### History — findings
- **How do historians study the past?** The conflicting-source questions correctly recommend evaluating perspective, purpose, audience, and corroborating evidence rather than automatically trusting one source.
- **Prehistory and archaeology:** The tool-context questions correctly treat archaeological context as evidence for cautious interpretation, not proof of one certain use or belief. They also correctly reject the idea that unwritten periods lack evidence.
- **Agriculture and civilization:** Surplus food may support specialized work, while storage and ownership can affect social relations. The questions appropriately avoid claiming farming guaranteed equality or eliminated disease and conflict.
- **Empires and exchange:** Trade routes can carry ideas, technologies, languages, and diseases. The crop example correctly distinguishes a plausible link from proof of causation.
- **Distractor quality:** Incorrect choices represent overconfidence in a single source, certainty from artifacts, simplistic accounts of farming, and overly absolute claims about cultural exchange.
- **No confirmed factual/keying errors found in this batch.**

### Batch 2 disposition
No question wording or answer-key edits are recommended for Biology or History based on this pass. Preserve the existing qualifications around heritability, archaeological interpretation, and causal inference. This content review does not replace the planned automated and live-app regression tests.
