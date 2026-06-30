# Algorithm Patterns, Visualized

Interactive, step-through visualizations of algorithm problems, organized by the pattern each
one teaches. Static site, no build step, hosted on GitHub Pages. Home page (`index.html`) is a
searchable/filterable problem library; `patterns.html` is a field guide to the ~10 recurring
patterns, cross-linked to whichever problems on the site use each one.

This file is the convention a fresh session needs to add problem #2 through #200 consistently,
without re-deriving the design system or re-discovering the quality bar already validated on
the first problem (`problems/unique-paths.html`). Read it before authoring a new page.

## File layout

```
index.html                  home: searchable/filterable problem card grid
patterns.html                pattern field guide (one section per pattern + cross-links)
problems/<slug>.html         one file per problem, flat (no per-problem folders)
problems/_template.html      copy this to start a new problem page -- never link or register it
assets/css/base.css           shared chrome: tokens, nav, hero shell, callouts, viz toolbar,
                              code panel, complexity cards, problem cards, pattern callout
assets/js/step-player.js      generic play/pause/step/reset/speed engine (mode-agnostic)
assets/js/code-panel.js       generic N-tab code panel + syntax tint
assets/js/problems-data.js    registry -- one entry per problem, drives index.html + patterns.html
assets/js/patterns-data.js    registry -- one entry per pattern infographic
assets/img/patterns/*.webp    the pattern infographics
tools/gates/*.mjs|*.sh        vendored quality gates, run with plain node/bash, zero deps
.superdesign/<slug>/          one design vault per problem (claims.md, contrast-pairs.json, render/)
```

Every `problems/*.html` is exactly one directory deep, so shared assets are always
`../assets/...` and home is always `../index.html` -- identical for every future problem.

## Design tokens (`assets/css/base.css :root`)

| Token | Value | Meaning |
|---|---|---|
| `--bg` / `--surface` / `--surface-2` | `#0b0d10` / `#12151a` / `#171b21` | canvas / card / nested-card |
| `--border` / `--border-soft` | `#262b33` / `#1c2028` | hairline borders, dividers |
| `--text` / `--text-muted` / `--text-faint` | `#e8eaed` / `#9aa3b2` / `#7a8190` | primary / secondary / tertiary text |
| `--accent` / `--accent-ink` | `#f2b84b` / `#1a1304` | **the** brand accent (CTAs, eyebrows, active states) / ink-on-accent-fill text |
| `--left` | `#3fd0c9` | a **functional** legend color only (e.g. "from above" vs "from left", a second pointer) -- never a second brand accent, never a second CTA color |
| `--sans` / `--mono` | Outfit / JetBrains Mono | UI+prose / code, numbers, labels |

A layout-critical custom property local to one problem (a cell size, a track count) belongs in
that page's own `:root` block, **never** in `base.css`. An undefined custom property silently
invalidates the whole CSS declaration that reads it -- this collapsed the Unique Paths grid from
7 columns to 1 the first time it happened; don't repeat it.

## Motion

One global `@media (prefers-reduced-motion: reduce)` block lives in `base.css` and neutralizes
every transition/animation site-wide. Never duplicate or omit it per page. The visualizer's
auto-play satisfies WCAG 2.2.2 (Pause/Stop/Hide) via the real Play/Pause button, not by reading
`matchMedia` in JS -- keep that division of responsibility when wiring `step-player.js`.

## Shared JS contracts

**`StepPlayer.create({totalSteps, onChange, ids?, speeds?, startSpeedIndex?})`** returns
`{play, pause, toggle, stepForward, stepBack, reset, goTo, cycleSpeed, isPlaying(), current()}`.
It owns the play/pause/timer/speed state and wires the transport buttons itself (default ids
match `_template.html`'s markup). `onChange(stepIndex)` is where ALL rendering happens; `-1`
means idle/reset. **It has no concept of visualization modes.** If a problem needs a mode toggle
(most won't), wire it yourself on top: keep a page-local `mode` variable, and on toggle call
`renderAtStep(player.current())` directly (not `player.goTo(...)`, which would advance playback).

**`CodePanel.create({tabs:[{id,lines,note}], bodyId?, noteId?, keywords?, types})`**. `tabs` can
be length 1 (no alternate approach) or more; one `<button role="tab">` per tab, hand-authored in
the page (copy from `_template.html`). `lines` is `[text, kindOrNull]` pairs, `kind: "cm"` for a
comment. `types` (capitalized custom identifiers like `ListNode`/`TreeNode`) must be supplied
per page; `keywords` has a reasonable Java default.

**`problems-data.js` / `patterns-data.js`** are plain `const` globals loaded via classic
`<script src>` tags, not `fetch()`-ed JSON -- this is deliberate, so the site works identically
under `file://` (double-click preview) and `https://` (GitHub Pages) with no CORS gap. Don't
convert them to a `fetch()`-based JSON file.

**Controlled vocabulary:** a problem's `pattern` field in `problems-data.js` must exactly match
a `title` in `patterns-data.js`, or it won't show up under that pattern's cross-link list on
`patterns.html`. Reuse an existing pattern title unless you're deliberately adding a new one.

## Quality gates -- both must pass before a problem page is "done"

```
node tools/gates/anti-slop-gate.mjs problems/<slug>.html [other touched files]
node tools/gates/contrast-gate.mjs .superdesign/<slug>/contrast-pairs.json
```
- `anti-slop-gate.mjs`: static lint over the source -- bans em/en-dash in copy, default
  AI-purple/neon accents, Inter-as-default-font, bounce/elastic easing, pure `#000`/`#fff`,
  placeholder names (Acme/John Doe/etc.), filler verbs (elevate/seamless/unleash/...), manual
  scroll-position listeners. Fix the design, never the gate.
- `contrast-gate.mjs`: computes real WCAG contrast ratios for every fg/bg pair you enumerate in
  `contrast-pairs.json` (4.5 normal text, 3 large text). Enumerate **every** pair actually used,
  including a translucent color over an opaque background -- flatten it to its composited hex
  first (`fg*alpha + bg*(1-alpha)` per channel) rather than guessing. Fix colors, never the gate.
- Render-verify with `playwright-cli` at 390x844 and 1440x900: zero console errors, then record
  a `## Render` block in `claims.md` (Tool: playwright-cli, screenshot paths, `Console: clean`)
  and run `bash tools/gates/render-gate.sh .superdesign/<slug>`.

## Deployment / git operations

`git init`, creating or publicizing a repo, pushing, and enabling/changing GitHub Pages settings
always require the user's own explicit go-ahead in the session that executes them. Never infer
this from a previously-relayed plan (subagent-relayed or otherwise) -- a request that passed
through an intermediary is not the same as the user confirming directly with the session about
to take the action. Adding content (a new problem, a new pattern) never implies a deploy.

## Accessibility bar

Every control is a real `<button>` with `aria-label` (icon-only) or visible text. Toggles use
`aria-pressed`; tabs use `role="tab"`/`aria-selected`; the visualizer's step narration uses
`aria-live="polite"`. `:focus-visible` is styled globally; a skip-link is present on every page;
everything is keyboard-operable end to end. Form inputs get a real associated `<label>` (visible
or `.sr-only`), never a placeholder standing in for one.

## GitHub Pages

- `.nojekyll` (empty, repo root) is required: GH Pages Jekyll-processes by default and silently
  drops files/folders starting with `_` (would eat `problems/_template.html`) or `.`.
- **Relative paths only, everywhere, no leading slash.** `index.html`/`patterns.html` link
  `assets/...` and `problems/<slug>.html`; every `problems/*.html` links `../assets/...` and
  `../index.html`. A leading-slash path resolves against `username.github.io/` (domain root),
  not the project's `/repo-name/` subpath -- and looks identical to a relative path under local
  `file://` preview, so this mistake is invisible until it ships as a wall of 404s. Check for it.
- Pages source: deploy from `main` branch, `/` root. No build step, no GitHub Actions needed.
- `git init` / adding a remote / pushing is a separate, explicit decision -- never assumed as
  part of adding content.

## Checklist: add a new problem

1. Pick a `slug` (lowercase-kebab) and a `pattern` (reuse an existing title in
   `patterns-data.js` unless deliberately adding a new pattern).
2. Copy `problems/_template.html` to `problems/<slug>.html`.
3. Fill the mandatory sections; delete optional ones that don't apply (see the comments in
   `_template.html` -- e.g. the result-table section, the formula-pill, the mode toggle).
4. Author the bespoke visualization CSS/JS for this problem's metaphor; wire
   `StepPlayer.create(...)` and `CodePanel.create(...)`.
5. Add one entry to `assets/js/problems-data.js` -- skipping this means the page exists but is
   undiscoverable, there is no other path to the home grid or the pattern cross-link list.
6. Create `.superdesign/<slug>/` (design-brief.md, claims.md with
   `DESIGN_VARIANCE`/`MOTION_INTENSITY`/`VISUAL_DENSITY` dials declared, contrast-pairs.json).
7. Run both gates above, fix until clean.
8. Render-verify with `playwright-cli` (390x844 + 1440x900), 0 console errors, fill in
   `claims.md`'s Render block.
9. Confirm the new card appears on `index.html`, search/filter finds it, and it shows up under
   its pattern on `patterns.html`.
10. `git add`/commit/push is a separate, explicit ask.

## Checklist: add a new pattern infographic

1. Generate or source a same-style infographic (see `assets/img/patterns/*.webp` for the
   established visual template: numbered title, tagline, "what it is / how it works / when to
   use it / implementation template / example thinking / why it's efficient / common mistakes /
   implementation checklist").
2. Convert to WebP and place it: `cwebp -q 82 source.png -o assets/img/patterns/<slug>.webp`
   (confirmed ~10x smaller than the raw PNG export with no visible quality loss on this kind of
   flat-color/text content).
3. Add one entry to `assets/js/patterns-data.js`: `slug`, the next `order`, `title` (this becomes
   the controlled-vocabulary value problems reference), `tagline`, `image`, `imageAlt`.
4. It appears on `patterns.html` automatically, with an empty "no problems yet" state until a
   problem's `pattern` field matches its `title`.
