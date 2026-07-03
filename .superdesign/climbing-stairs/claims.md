# claims - designer self-audit (one entry per surface)

## climbing-stairs

- Mode + medium: CREATE / web
- Design Read: entry-level DP explainer page (course level 1), for a developer and non-developer
  audience, calm dark dev-tool direction, fully consistent with the existing site (shared
  base.css chrome, bespoke 1D-strip CSS only).
- Dials: DESIGN_VARIANCE 4 / MOTION_INTENSITY 5 / VISUAL_DENSITY 4
- Accent / type / radius / theme: one amber accent `#f2b84b` (CTA, eyebrow, active state) plus one
  functional teal `#3fd0c9` used only as a 2-color source legend (one-step-back vs two-steps-back
  in the visualizer, not a second brand accent) / Outfit (display + body) + JetBrains Mono (code,
  strip numbers, labels) / 8px-18px radius scale / single dark theme (dev-tool framing).
- Assets: no photographic or illustration assets; all visuals are live CSS/JS-driven strips and
  CSS diagrams; inline-SVG control glyphs only (play/pause/step/reset).
- Claim: no build step. Centerpiece is a real step-through 1D strip visualizer (play/step/reset/
  speed) computed live in JS from the actual recurrence dp[i] = dp[i-1] + dp[i-2], not pre-baked.
  Reduced motion neutralizes all transitions globally. All controls are real buttons, keyboard-
  operable, with an aria-live status readout and an aria-label per icon button.
- Framings: 390x844 mobile, 1440x900 desktop
- run-to-prove: `bash tools/gates/preflight-gate.sh .superdesign/climbing-stairs problems/climbing-stairs.html`

## Render

- Tool: playwright-cli
- Served over `http://127.0.0.1:8099` (the browser blocks the file: protocol; HTTP also matches how
  GitHub Pages serves the relative asset paths, so this is the truer check).
- Screenshots: render/desktop-1440x900.png (1440x900, full page, visualizer stepped to dp[2]),
  render/mobile-390x844.png (390x844, full page).
- Console: clean (0 errors, 0 warnings at both framings).
- Verified: page state on load (title, dark bg #0b0d10, 6 strip cells, 6 hero cells); the strip
  fills 1,1,2,3,5,8; formula readout reads `dp[2] = dp[1] + dp[0] = 1 + 1 = 2` after stepping;
  source rings (amber one-back, teal two-back), code panel, complexity cards, and pattern card all
  render; mobile stacks to one column and the strip fits 390px.
- render-to-prove: `bash tools/gates/render-gate.sh .superdesign/climbing-stairs`
