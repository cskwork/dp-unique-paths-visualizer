# Algorithm Patterns, Visualized

Interactive, step-through visualizations of algorithm problems, organized by the pattern each one teaches.

**Live site: https://cskwork.github.io/dp-unique-paths-visualizer/**

A static site with no build step, hosted on GitHub Pages. Open the live link above, or double-click any HTML file locally and it works the same way.

## About

This project turns algorithm problems into visualizations you can play, pause, and step through one move at a time, so the idea behind each solution is something you watch rather than something you decode from code alone. Problems are grouped by the recurring pattern that solves them, so learning one problem also strengthens your grip on every other problem that shares its shape.

- **Home** (`index.html`): a searchable, filterable grid of problem cards.
- **Patterns** (`patterns.html`): a field guide to the ten recurring patterns, each cross-linked to the problems on the site that use it.
- **Problem pages** (`problems/<slug>.html`): one page per problem, each with a bespoke visualization, a play/pause/step transport, a code panel, and complexity notes.

## Live site

https://cskwork.github.io/dp-unique-paths-visualizer/

Deployed from the `main` branch (root path). No build step and no GitHub Actions: the HTML, CSS, and JS you see in the repo are exactly what ships.

## Problems

| Problem | Pattern | Difficulty |
|---|---|---|
| [Unique Paths](https://cskwork.github.io/dp-unique-paths-visualizer/problems/unique-paths.html) | Dynamic Programming | Medium |

More problems are added over time. Each new problem also appears under its pattern on the patterns page.

## Patterns

The pattern field guide covers ten shapes that recur across most algorithm problems:

Two Pointers · Sliding Window · Prefix Sum / Prefix Product · Hash Map / Hash Set · Stack · Queue / BFS · DFS / Backtracking · Binary Search · Dynamic Programming · Greedy

Browse them at [patterns.html](https://cskwork.github.io/dp-unique-paths-visualizer/patterns.html).

## Run it locally

No install, no dependencies, no build:

```bash
git clone https://github.com/cskwork/dp-unique-paths-visualizer.git
cd dp-unique-paths-visualizer
open index.html          # macOS, or just double-click the file
```

The data registries (`problems-data.js`, `patterns-data.js`) load as plain global scripts rather than fetched JSON, so the site behaves identically under `file://` (local preview) and `https://` (GitHub Pages) with no CORS gap.

## Project structure

```
index.html                  home: searchable/filterable problem card grid
patterns.html               pattern field guide (one section per pattern + cross-links)
problems/<slug>.html        one file per problem (flat, no per-problem folders)
problems/_template.html     starting point for a new problem page
assets/css/base.css         shared design tokens, nav, viz toolbar, code panel, cards
assets/js/step-player.js    generic play/pause/step/reset/speed engine
assets/js/code-panel.js     generic tabbed code panel with syntax tint
assets/js/problems-data.js  registry driving index.html + patterns.html cross-links
assets/js/patterns-data.js  registry of pattern infographics
assets/img/patterns/*.webp  the pattern infographics
tools/gates/                quality gates (anti-slop lint, WCAG contrast), zero deps
```

`.nojekyll` sits in the repo root on purpose: GitHub Pages runs Jekyll by default, which silently drops files and folders that start with `_` (it would eat `problems/_template.html`) or `.`.

## Accessibility

Every control is a real button with an accessible label; toggles use `aria-pressed`, tabs use `role="tab"`, and step narration is announced with `aria-live`. A `prefers-reduced-motion` block neutralizes animation site-wide, focus states are styled, and every page is keyboard-operable end to end with a skip link.

## Adding a problem

Contributor conventions, the design token reference, the shared JS contracts, and the full "add a problem" and "add a pattern" checklists live in [CLAUDE.md](CLAUDE.md). Two quality gates (anti-slop lint and WCAG contrast) must pass before a problem page is considered done:

```bash
node tools/gates/anti-slop-gate.mjs problems/<slug>.html
node tools/gates/contrast-gate.mjs .superdesign/<slug>/contrast-pairs.json
```
