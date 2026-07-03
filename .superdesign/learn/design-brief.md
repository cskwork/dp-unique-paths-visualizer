# design-brief - learn

Surface: learn.html (the course spine, linked from nav as "Learn")
Goal: let anyone, including a non-developer, understand what dynamic programming is and where to
start, then walk four problems in order.

Structure:
1. Hero: who it is for (total beginners), what the course is.
2. The core idea in plain words, with the kitchen-notepad analogy (solve each small piece once,
   write it down, never redo it).
3. The setup: four questions that unlock any DP problem (what does dp[i] mean / what is the choice /
   how does a bigger answer use smaller ones / which cases are base cases).
4. The path: four level cards on a vertical rail, each naming the one new idea it adds and linking
   to its problem. Levels 1-3 share the 1D strip; level 4 (Unique Paths) grows it into a grid.
5. Common traps: three habits that prevent most beginner mistakes.
6. Close: you are not here to memorize templates.

Direction: reuse the site's dark dev-tool system; bespoke CSS for the level rail and card grids.
No visualizer here by design; this page is the map that sends readers into the interactive problems.
Motion: hover transitions only, neutralized under prefers-reduced-motion globally.
