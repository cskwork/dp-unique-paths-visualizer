# design-brief - site shell (home index + pattern field guide + shared chrome)

Reading this as: the site-level shell around a growing problem library, same audience as
`unique-paths` (developers studying algorithms/interview prep), same dark dev-tool direction --
this is an extension of that existing direction onto two new surfaces, not a fresh read.

## Infer

- **Kind**: two browse/reference pages (home problem library, pattern field guide) plus the
  shared chrome (`assets/css/base.css`) every problem page also depends on.
- **Primary action**: none in the conversion sense -- find a problem (search/filter) or learn a
  pattern (skim + cross-link), same as the first problem page. `engagement.md`/`dashboard.md`
  still don't apply.
- **Medium**: web, static, no build step, same as before.
- **Audience/vibe**: unchanged from `unique-paths` -- calm, technical, dark IDE-adjacent.
- **Quiet constraints**: introduces one new color not previously verified (`#ff8a7a`, a coral
  used only for the "Hard" difficulty tag and the generic error-note text) -- contrast-checked
  against both `surface-2` (7.54) and `bg` (8.49) before use, both clear AA with margin.

## Direction carried into Build

No new aesthetic family, no new dials -- this reuses the `unique-paths` page's established
direction exactly (`DESIGN_VARIANCE 5 / MOTION_INTENSITY 5 / VISUAL_DENSITY 4`, same tokens,
same type stack). The only additions are: a search/filter UI and a data-driven card grid (home),
a jump-nav + cross-linked card list (patterns), and two small shared components promoted into
`base.css` because two pages now use them (`.problem-card`, `.empty-note`/`.error-note`).
