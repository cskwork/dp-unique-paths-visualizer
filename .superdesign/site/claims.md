# claims - designer self-audit (one entry per surface)

The designer records what was built and HOW to prove it. The critic runs the run-to-prove; the designer never self-approves.

## site-shell (index.html + patterns.html + assets/css/base.css)

- Mode + medium: CREATE / web
- Design Read: home problem-library + pattern field-guide shell around the existing
  `unique-paths` direction, same developer/interview-prep audience, no new aesthetic family
- Dials: DESIGN_VARIANCE 5 / MOTION_INTENSITY 5 / VISUAL_DENSITY 4 (unchanged from unique-paths)
- Accent / type / radius / theme: same locked tokens as unique-paths (one amber accent, one
  functional teal legend color, Outfit+JetBrains Mono, dark theme only); one new color added,
  `#ff8a7a` (coral, "Hard" difficulty tag + generic error-note text), contrast-checked before
  use (7.54 on surface-2, 8.49 on bg, both clear AA)
- Assets: no new image/illustration assets; the 10 pattern infographics are a separate already
  -processed asset batch (assets/img/patterns/*.webp), referenced but not styled by this surface
- Claim: index.html is a fully data-driven (problems-data.js), client-side searchable/filterable
  card grid with real empty/error states and an aria-live result count; patterns.html is a
  data-driven (patterns-data.js) field guide with a jump-nav and, per pattern, a cross-linked
  list of problems on the site using it (problems-data.js filtered by a controlled-vocabulary
  `pattern` field) -- including a real empty state ("no problems yet for this pattern"), not a
  silent gap. `.problem-card` and `.empty-note`/`.error-note` were promoted from page-local CSS
  into shared `base.css` because both new pages now use them.
- Framings: 390x844 mobile, 1440x900 desktop
- run-to-prove: `bash tools/gates/preflight-gate.sh .superdesign/site index.html patterns.html assets/css/base.css`

## Render (critic fills after rendering the surface with playwright-cli; never the designer)

- Tool: playwright-cli
- Screenshots: pending -- filled in by the render-verification pass (task 14)
- Console: pending
- render-to-prove: `bash tools/gates/render-gate.sh .superdesign/site`
