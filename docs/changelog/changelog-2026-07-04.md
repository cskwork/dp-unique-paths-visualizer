# Changelog 2026-07-04

## Add a beginner dynamic-programming course: three easier problems, a course page, updated tips

### What changed

- New problem pages (each a full step-through visualizer, code panel, complexity, pattern card):
  - `problems/climbing-stairs.html` (Easy, level 1): `dp[i] = dp[i-1] + dp[i-2]`
  - `problems/min-cost-climbing-stairs.html` (Easy, level 2): `dp[i] = min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2])`
  - `problems/house-robber.html` (Medium, level 3): `dp[i] = max(dp[i-1], dp[i-2]+nums[i])`
- New `learn.html`: the course spine. Plain-language "what is DP", the four-question setup, a
  vertical level path (1-4) linking each problem, and a common-traps section. Added "Learn" to the
  nav on every page and a beginner "Start the course" banner on `index.html`.
- `tips.html`: added a DP-specific "set up any DP problem in four questions" section and a "two
  tools" section, plus the course link.
- Registered the three problems in `problems-data.js` (library now sorts easy -> hard). Updated
  `README.md` (problems table, structure, about).
- Design vaults under `.superdesign/{climbing-stairs,min-cost-climbing-stairs,house-robber,learn}/`
  with claims, contrast pairs, and render evidence.

### Decisions and why

- Ladder = Climbing Stairs -> Min Cost Climbing Stairs -> House Robber -> Unique Paths. This is the
  widely-recommended easy DP order (confirmed by a research pass: NeetCode/takeuforward/GfG). Each
  page changes exactly one idea from the previous: count (add) -> cost (min) -> choice (max) -> 2D
  grid. Rejected: starting with a bare Fibonacci page (no story reads drier than Climbing Stairs);
  rejected reorganizing `index.html` into levels (would break the existing search/filter UX; a
  dedicated course page keeps the library intact and adds a guided path on top).
- Shared 1D-strip visual metaphor across levels 1-3 (same picture, only the operator changes) so
  the "DP is one idea" point lands visually. Level 4 (Unique Paths) deliberately grows the strip
  into a grid. Bespoke strip CSS/JS stays inline per page per the project convention; only the
  shared chrome lives in `base.css`.
- Non-developer framing: every problem page carries a "what dp[i] means, in words" callout, and the
  course leads with the state-in-plain-words habit. This came out of the research brief as the
  single highest-leverage beginner habit ("say what dp[i] means before you code").
- Site copy kept in English to stay consistent with the existing public site (confirmed with the
  user); the language is simplified for non-developers rather than translated.

### Shared-chrome change (touches unique-paths too)

- `base.css`: `.pattern-card .lede` now uses `color: var(--text)` instead of the inherited
  `--text-muted`. Reason: muted text (#9aa3b2) over the accent-tinted pattern-card panel (composited
  ~#2b2518) computes to ~3.9:1, below the WCAG AA 4.5 threshold. The new pages use this component
  and I enumerate every contrast pair honestly, so the latent sub-AA pair had to be fixed rather
  than hidden. This also improves the pre-existing `unique-paths` and `tips` pattern cards.
  Re-rendered unique-paths after the change: 0 console errors, no visual regression.
- Index-label color on the strip cells was raised from `--text-faint` to `--text-muted` because
  faint (#7a8190) on surface-2 (#171b21) computes to ~4.4:1, just under 4.5. Muted passes.

### Verification

- `anti-slop-gate.mjs`: PASS on all new HTML + `base.css` + `problems-data.js` (9 files).
- `contrast-gate.mjs`: PASS on all four new vaults, the shared `site` vault, and `unique-paths`.
- `preflight-gate.sh`: PASS for all four new surfaces.
- `render-gate.sh`: PASS for all four new surfaces and `unique-paths`.
- DP math sanity-checked in Node against LeetCode examples: Climbing Stairs (8), Min Cost (15, 6),
  House Robber (4, 4, 12).
- Rendered every page with `playwright-cli` at 1440x900 and 390x844, 0 console errors/warnings.
  Note: the render browser blocks the `file:` protocol, so pages were served over a local HTTP
  server (which also matches how GitHub Pages serves the relative asset paths).
- Data integration confirmed live: `index.html` shows all four cards with correct difficulty tags
  plus the course banner; `patterns.html` cross-lists all four under Dynamic Programming.

### Post-review fixes (three parallel adversarial reviews: accessibility, JS/DP correctness, copy)

- Accessibility/design-system review and JS/DP correctness review came back clean (no defects).
- Simplified the `house-robber` "robbed" money-box highlight logic: the previous nested condition
  was redundant dead code with a latent misleading edge (if the first two houses were in the other
  order). Rewrote it as one clear `robsThisHouse` expression. Re-rendered and confirmed the marker
  is correct at every step (0->[0], 1->[1], 2->[2], 3->[], 4->[4]).
- Copy review found four real issues, all fixed:
  1. `unique-paths` (level 4) had no course framing. Added a "Course level 4" chip and the
     "Follow the course" footer backlink so all four levels read as one course.
  2. The Min Cost recurrence shorthand `min(dp[i-1]+cost, dp[i-2]+cost)` is ambiguous (reads as
     `cost + min(...)`, which hides the point). Made both costs explicit (`cost[i-1]`/`cost[i-2]`)
     in the hero pill and the learn.html level chip, matching the page's own derivation.
  3. The Min Cost cost-row callout mixed "stepping on" and "step off" in adjacent sentences.
     Rewrote to a single model.
  4. "From easy to hard" overstated the ceiling (top problem is Medium, not Hard). Reworded the
     index banner and README to "in increasing difficulty".
