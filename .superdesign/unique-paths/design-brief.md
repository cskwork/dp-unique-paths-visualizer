# design-brief - Unique Paths DP explainer

Reading this as: a developer-education explainer microsite for the "Unique Paths" grid-DP
pattern, for self-learners/interview-prep developers, calm-technical vibe, leaning a custom
dark dev-tool direction (no single named aesthetic family forced).

## Infer

- **Kind**: educational/explainer microsite (single concept, single problem), not marketing.
- **Primary action**: none (no conversion goal) - the "action" is comprehension; the page's
  job is to make the recurrence `dp[row][col] = dp[row-1][col] + dp[row][col-1]` click via an
  interactive, step-through visualization rather than a sign-up/buy CTA. `engagement.md` and
  `dashboard.md` both skipped - not a conversion surface, not a data-dense business app.
- **Medium**: web, single static HTML file (no build step, no backend).
- **Audience**: developers studying DP / coding-interview prep; comfortable with code, may be
  seeing this exact recurrence for the first time.
- **Vibe words**: calm, technical, IDE-adjacent, dark-mode-first, content-led, "let me play
  with it" rather than "convince me."
- **References**: source content is the user-supplied markdown walkthrough (LeetCode 62,
  Unique Paths) - 2D DP, why-it-works, 1D DP optimization, complexity table, pattern callout.
- **Brand assets**: none supplied - free choice within taste-core guardrails.
- **Quiet constraints**: WCAG AA contrast (dark theme raises risk of low-contrast muted text);
  reduced-motion fallback for the step animation (the core interactive element); keyboard
  operability for play/step/reset controls.

## Ask gate

No ambiguity worth blocking on - single concrete source doc, single concept, no audience/brand
conflict. Proceeding without a clarifying question (non-interactive default + Auto Mode).
Logged assumption: content language is English, matching the supplied technical brief and
standard convention for algorithm/interview-prep material (LeetCode-style), even though the
requester's own working language is Korean.

## Direction carried into Build

- No forced family from `aesthetics.md` selection map (closest signal is "minimalist /
  content-led" but the brief is explicitly code/IDE-flavored, which the named `minimalist`
  family does not cover as a light-canvas family) -> base `taste-core.md` alone, custom
  dark dev-tool direction: off-black surfaces, one amber accent for interaction/CTA,
  amber/teal as a 2-color *functional* legend (top-source vs left-source arrows in the
  visualizer, not a second brand accent), JetBrains Mono for code/grid numbers, Outfit for
  prose (Inter avoided per taste-core default).
- Centerpiece: a real interactive grid-fill visualizer (play/step/reset) with a toggle
  between the 2D-grid mental model and the 1D-array (space-optimized) mental model, since
  the source doc's hardest-to-grasp section is "how the 1D version is the same logic
  compressed" - that's the thing worth animating, not just transcribing.
