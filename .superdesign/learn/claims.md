# claims - designer self-audit (one entry per surface)

## learn

- Mode + medium: CREATE / web
- Design Read: the course spine, a beginner-first landing page that explains dynamic programming in
  plain words and sequences the four problems into an ordered path. Audience explicitly includes
  non-developers. Calm dark dev-tool direction, consistent with the site (shared base.css chrome,
  bespoke CSS for the idea steps, the four-question grid, and the vertical level path).
- Dials: DESIGN_VARIANCE 4 / MOTION_INTENSITY 2 / VISUAL_DENSITY 5
- Accent / type / radius / theme: one amber accent `#f2b84b` (CTA, eyebrow, level markers, active)
  plus the functional teal `#3fd0c9` reused only for the "Easy" difficulty pill (the site's existing
  difficulty legend) / Outfit + JetBrains Mono / 8px-18px radius / single dark theme.
- Assets: no photographic or illustration assets; all visuals are CSS (numbered dots, connector
  rail, cards) and inline-SVG chevrons.
- Claim: no build step, no visualizer on this page (it is the map, not a problem). Static content
  only; the level cards are real links to the four problem pages. Every control is a real link or
  the shared text-size buttons. Reduced motion neutralizes the hover transitions globally.
- Framings: 390x844 mobile, 1440x900 desktop
- run-to-prove: `bash tools/gates/preflight-gate.sh .superdesign/learn learn.html`

## Render

- Tool: playwright-cli
- Served over `http://127.0.0.1:8099` (the browser blocks the file: protocol; HTTP also matches how
  GitHub Pages serves the relative asset paths).
- Screenshots: render/desktop-1440x900.png (1440x900, full page), render/mobile-390x844.png
  (390x844, full page).
- Console: clean (0 errors, 0 warnings at both framings).
- Verified: 4 level cards and 4 question cards present; the vertical rail with numbered amber dots
  and connectors renders; difficulty pills (Easy teal, Medium amber) show; hero, three idea steps,
  the four-question grid, the common-traps callouts, and the closing pattern card all render; the
  level cards link to the four problem pages; mobile stacks to one column.
- render-to-prove: `bash tools/gates/render-gate.sh .superdesign/learn`
