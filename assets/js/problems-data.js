/* Registry of every problem page on the site, rendered by index.html's searchable/filterable
   card grid and cross-linked from patterns.html. Loaded as a plain global (not fetch()-ed JSON)
   so it works identically under file:// (local preview) and https:// (GitHub Pages) with no
   CORS gap. `path` is relative to the repo root (both index.html and patterns.html live there).
   `pattern` MUST exactly match a `title` in patterns-data.js -- that's the only thing tying a
   problem to its pattern reference card. See CLAUDE.md for the full "add a problem" checklist. */
const PROBLEMS = [
  {
    slug: "unique-paths",
    title: "Unique Paths",
    pattern: "Dynamic Programming",
    difficulty: "Medium",
    summary: "Count distinct paths across a grid moving only right or down.",
    path: "problems/unique-paths.html",
    dateAdded: "2026-07-01"
  }
];
