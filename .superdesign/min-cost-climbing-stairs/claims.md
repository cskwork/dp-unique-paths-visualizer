# claims - designer self-audit (one entry per surface)

## min-cost-climbing-stairs

- Mode + medium: CREATE / web
- Design Read: entry-level DP explainer page (course level 2), developer and non-developer
  audience, calm dark dev-tool direction, consistent with the site (shared base.css chrome,
  bespoke CSS for the cost-over-answer strip).
- Dials: DESIGN_VARIANCE 4 / MOTION_INTENSITY 5 / VISUAL_DENSITY 4
- Accent / type / radius / theme: one amber accent `#f2b84b` (CTA, eyebrow, active, chosen route)
  plus one functional teal `#3fd0c9` used only as a 2-color source legend (route from one below vs
  two below) / Outfit + JetBrains Mono / 8px-18px radius / single dark theme.
- Assets: no photographic or illustration assets; all visuals are live CSS/JS strips and diagrams;
  inline-SVG control glyphs only.
- Claim: no build step. Centerpiece is a step-through strip visualizer computed live from
  dp[i] = min(dp[i-1]+cost[i-1], dp[i-2]+cost[i-2]); the top row shows fixed costs, the bottom row
  fills with the cheaper of two routes, and the winning route is marked at each step. Reduced
  motion neutralizes all transitions globally. All controls are real, keyboard-operable buttons
  with aria-live status.
- Framings: 390x844 mobile, 1440x900 desktop
- run-to-prove: `bash tools/gates/preflight-gate.sh .superdesign/min-cost-climbing-stairs problems/min-cost-climbing-stairs.html`

## Render

- Tool: playwright-cli
- Served over `http://127.0.0.1:8099` (the browser blocks the file: protocol; HTTP also matches how
  GitHub Pages serves the relative asset paths).
- Screenshots: render/desktop-1440x900.png (1440x900, full page, stepped to dp[4]),
  render/mobile-390x844.png (390x844, full page).
- Console: clean (0 errors, 0 warnings at both framings).
- Verified: the cost row (10,15,20,5,25,top) sits over the answer row; the answer row fills
  0,0,10,15,20,20; formula readout reads `dp[4] = min( 20, 30 ) = 20  (cheaper from one stair
  below)`, which matches the hand computation; the winning route and the top cell highlight; code,
  complexity, and pattern card render; mobile stacks cleanly.
- render-to-prove: `bash tools/gates/render-gate.sh .superdesign/min-cost-climbing-stairs`
