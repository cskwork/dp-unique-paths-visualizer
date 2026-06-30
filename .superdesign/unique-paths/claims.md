# claims - designer self-audit (one entry per surface)

The designer records what was built and HOW to prove it. The critic runs the run-to-prove; the designer never self-approves.

## unique-paths

- Mode + medium: CREATE / web
- Design Read: educational/explainer microsite for the Unique Paths grid-DP pattern, for
  developer/interview-prep audience, calm-technical vibe, leaning a custom dark dev-tool
  direction (no single named aesthetic family forced; base taste-core only)
- Dials: DESIGN_VARIANCE 5 / MOTION_INTENSITY 5 / VISUAL_DENSITY 4
- Accent / type / radius / theme: one amber accent `#f2b84b` (interaction/CTA/eyebrows) plus
  one functional teal `#3fd0c9` used only as a 2-color data legend (top-source vs left-source
  arrows in the visualizer, not a second brand accent) / Outfit (display+body) + JetBrains Mono
  (code, grid numbers, labels) / 8px-18px radius scale / single dark theme (no light mode,
  justified: dev-tool/IDE framing is the whole point of the direction)
- Assets: no photographic/illustration assets needed; all visuals are real CSS/SVG diagrams and
  a live data-driven grid (not div-mockups or fake screenshots); 5 minimal inline-SVG control
  glyphs (play/pause/step/reset), generic geometric shapes, not a hand-rolled icon set
- Claim: no build step. Centerpiece is a real interactive step-through visualizer
  (play/step/reset/speed) with a toggle between a 2D grid mental model and a 1D array
  (space-optimized) mental model, computed live in JS from the actual recurrence, not
  pre-baked. Reduced-motion neutralizes all transitions/animations globally. All controls are
  real buttons, keyboard-operable, with aria-live status text and an aria-label per icon button.
- Update 2026-07-01: this page moved from repo-root `index.html` to `problems/unique-paths.html`
  as the site grew a home index + pattern field guide (see repo `CLAUDE.md`). Its chrome CSS
  (tokens, nav, viz toolbar, code-panel, complexity cards) was extracted verbatim into the
  now-shared `assets/css/base.css`; its transport-control and code-tab JS were refactored onto
  the new shared `assets/js/step-player.js` / `assets/js/code-panel.js` engines (same behavior,
  not reimplemented). Bespoke grid/diagram CSS and the DP computation/render logic stayed
  inline, unchanged. This is a refactor of already-verified code, so it gets fully re-verified,
  not assumed correct -- the Render block below is refreshed post-refactor, not left stale.
- Framings: 390x844 mobile, 1440x900 desktop
- run-to-prove: `bash tools/gates/preflight-gate.sh .superdesign/unique-paths problems/unique-paths.html`

## Render (critic fills after rendering the surface with playwright-cli; never the designer)

**Pre-refactor render evidence (kept for history, superseded by the entry below once task 14
re-renders post-move/refactor):**
- Tool: playwright-cli
- Screenshots: render/mobile-390x844.png (390x844, full page), render/desktop-full-2.png
  (1440x900, full page, the corrected post-fix capture; render/desktop-1440x900.png,
  desktop-full.png, desktop-idea.png, desktop-viz-1d.png, desktop-viz-step9.png are earlier
  in-progress captures taken before two bugs were fixed mid-review and are kept in the vault
  for audit trail, not as final evidence). Also: render/desktop-idea-fixed.png (idea-diagram
  text-wrap fix close-up), render/desktop-viz-1d-ghost.png (1D ghost-row proof), render/
  mobile-idea-scroll-check.png (proves the sticky nav does not actually duplicate on real
  scroll; it only appears to in the stitched full-page mobile capture, a known Chromium
  full-page-screenshot + position:sticky compositing artifact, not a page defect).
- Console: clean (0 errors, 0 warnings at both framings, re-checked after every fix)
- Bugs found and fixed during this render pass:
  1. `.dp-grid` columns set via `var(--cell)` with no fallback and `--cell` never defined as
     a real custom property -> invalid at computed-value time -> grid-template-columns reset
     to `none` -> the entire 7-wide visualizer collapsed into 1 column. Fixed by defining
     `--cell` on `:root`.
  2. Idea-diagram formula text (`dp[row-1][col]` etc.) wrapped across 2-3 lines inside
     fixed-width boxes. Fixed by widening the boxes and pinning the formula line to a smaller
     `white-space:nowrap` size.
  3. Row-tag copy was redundant ("Processing row 1 (row 1)"). Rewrote to "row N of M (first
     row, boundary cells | middle row | last row)".
  4. 1D mode caption promised a ghost row ("shows the value before this pass") that was never
     actually rendered. Implemented the ghost row for real instead of softening the claim.

**Post-refactor render evidence (problems/unique-paths.html, shared base.css/step-player.js/
code-panel.js):** pending -- filled in by task 14's render-verification pass, not assumed clean
just because the pre-refactor page was.

- render-to-prove: `bash tools/gates/render-gate.sh .superdesign/unique-paths`
