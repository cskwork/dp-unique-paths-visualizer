/* Registry of every problem page on the site, rendered by index.html's searchable/filterable
   card grid and cross-linked from patterns.html. Loaded as a plain global (not fetch()-ed JSON)
   so it works identically under file:// (local preview) and https:// (GitHub Pages) with no
   CORS gap. `path` is relative to the repo root (both index.html and patterns.html live there).
   `pattern` MUST exactly match a `title` in patterns-data.js -- that's the only thing tying a
   problem to its pattern reference card. See CLAUDE.md for the full "add a problem" checklist. */
const PROBLEMS = [
  {
    slug: "climbing-stairs",
    title: "Climbing Stairs",
    pattern: "Dynamic Programming",
    difficulty: "Easy",
    summary: "Count the ways to climb a staircase by adding the ways to reach the two stairs below.",
    path: "problems/climbing-stairs.html",
    dateAdded: "2026-07-04"
  },
  {
    slug: "min-cost-climbing-stairs",
    title: "Min Cost Climbing Stairs",
    pattern: "Dynamic Programming",
    difficulty: "Easy",
    summary: "Reach the top of a priced staircase for the least total cost, keeping the cheaper of two routes.",
    path: "problems/min-cost-climbing-stairs.html",
    dateAdded: "2026-07-04"
  },
  {
    slug: "house-robber",
    title: "House Robber",
    pattern: "Dynamic Programming",
    difficulty: "Medium",
    summary: "Rob a row of houses for the most money without ever taking two that sit next to each other.",
    path: "problems/house-robber.html",
    dateAdded: "2026-07-04"
  },
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
