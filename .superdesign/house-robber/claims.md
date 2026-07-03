# claims - designer self-audit (one entry per surface)

## house-robber

- Mode + medium: CREATE / web
- Design Read: entry-level DP explainer page (course level 3), developer and non-developer
  audience, calm dark dev-tool direction, consistent with the site (shared base.css chrome,
  bespoke CSS for the house-money-over-answer strip).
- Dials: DESIGN_VARIANCE 4 / MOTION_INTENSITY 5 / VISUAL_DENSITY 4
- Accent / type / radius / theme: one amber accent `#f2b84b` (CTA, eyebrow, active, robbed house)
  plus one functional teal `#3fd0c9` used only as a 2-color source legend (skip plan vs rob plan)
  / Outfit + JetBrains Mono / 8px-18px radius / single dark theme.
- Assets: no photographic or illustration assets; all visuals are live CSS/JS strips and diagrams;
  inline-SVG control glyphs only.
- Claim: no build step. Centerpiece is a step-through strip visualizer computed live from
  dp[i] = max(dp[i-1], dp[i-2]+nums[i]); the top row shows each house's money, the bottom row fills
  with the best haul, and the winning plan (skip or rob) is marked at each step. Reduced motion
  neutralizes all transitions globally. All controls are real, keyboard-operable buttons with
  aria-live status.
- Framings: 390x844 mobile, 1440x900 desktop
- run-to-prove: `bash tools/gates/preflight-gate.sh .superdesign/house-robber problems/house-robber.html`

## Render

- Tool: playwright-cli
- Served over `http://127.0.0.1:8099` (the browser blocks the file: protocol; HTTP also matches how
  GitHub Pages serves the relative asset paths).
- Screenshots: render/desktop-1440x900.png (1440x900, full page, stepped to dp[4]),
  render/mobile-390x844.png (390x844, full page).
- Console: clean (0 errors, 0 warnings at both framings).
- Verified: the money row (2,7,9,3,1) sits over the answer row; the answer row fills 2,7,11,11,12;
  formula readout reads `dp[4] = max( 11, 12 ) = 12  (rob house 4)`, matching the hand computation
  (rob houses 0, 2, 4); the robbed house box and chosen route highlight; code, complexity, and
  pattern card render; mobile stacks cleanly.
- render-to-prove: `bash tools/gates/render-gate.sh .superdesign/house-robber`
