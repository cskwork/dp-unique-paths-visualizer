# Changelog 2026-07-06

## learn.html: make the DP explanation land for absolute beginners, and extend the path toward mastery

Request: "improve the explanation of dp so anybody can understand, simple and plain, and level up
step by step to dp mastery."

### What changed

1. **"One tiny problem, solved by hand" section** (new, between The Core Idea and The Setup).
   Four static panels walk the climbing-4-stairs count from empty boxes to the answer 5, using
   only "box" language (no `dp[i]` yet). Teal cell border = box being read, amber fill = box being
   written, matching the site's existing functional legend. Panel sums read
   `box 3 = box 2 + box 1 = 2 + 1 = 3`.
   - Why: the page previously *told* the idea (cook-with-a-notepad analogy) but never *showed*
     boxes filling before the reader clicked into a problem. Concrete-before-abstract: readers see
     the trick once on the page itself, then meet the four generalizing questions.
   - Rejected alternative: a small interactive step-player on the learn page. Rejected because
     the vault claim intentionally states "no visualizer on this page (it is the map, not a
     problem)", and it would duplicate Level 1's visualizer. Static panels keep the division:
     the map shows, the problems play.

2. **"What writing answers down actually buys you" section** (new). Two comparison cards:
   331,160,281 naive recursive calls to count ways up 40 stairs vs 40 boxes filled once.
   - Why: beginners accept the mechanic but not the motive; one honest number pair explains why
     the notepad habit matters. The count is exact: ways(40) = fib(41) = 165,580,141 and the
     naive call tree has 2*165,580,141 - 1 = 331,160,281 nodes.

3. **A "Cleared when" exit criterion on each of the four level cards.** One plain-words test per
   level (e.g. L2: "you can say in one sentence why the plus turned into a min the moment stairs
   got prices").
   - Why: "level up step by step" needs a definition of "leveled up". Saying the idea in words,
     not reciting the formula, is the mastery test the course already preaches (Question 1).

4. **"The road from here to mastery" section** (new, after Common Traps). Stages 5-8 as
   non-linked cards: grids with walls/prices, choices under a budget (knapsack family), two
   sequences side by side (LCS/edit distance), a carried fact (state machines). Plus a four-item
   mastery checklist.
   - Why: the course stopped at Level 4 with no onward direction; mastery needs a visible road.
   - Rejected alternative: linking the stages to problem pages. Rejected because those pages do
     not exist yet; the copy says so honestly ("not on this site yet"). When those problems are
     added, the stage cards are the natural place to grow links.

5. Small bridges: hero lede now promises the hand-worked example and per-level tests; The Setup
   lede introduces the naming hop "the row of boxes is called `dp`, box i is `dp[i]`" so
   non-coders survive Question 1's notation.

### Verification

- `node tools/gates/anti-slop-gate.mjs learn.html` PASS.
- `node tools/gates/contrast-gate.mjs .superdesign/learn/contrast-pairs.json` PASS. Three new
  pairs enumerated (box value on surface-2, teal read-cell on surface-2, inline code in lede on
  page bg); all >= 9:1.
- `bash tools/gates/preflight-gate.sh .superdesign/learn learn.html` PASS.
- playwright-cli re-render at 1440x900 and 390x844 over http://127.0.0.1:8099: 0 console errors,
  0 warnings at both framings; screenshots refreshed under `.superdesign/learn/render/`; both
  inspected (new sections render, mobile stacks to one column).
  `bash tools/gates/render-gate.sh .superdesign/learn` PASS.
- Not committed: per repo convention, git operations are a separate explicit ask.
