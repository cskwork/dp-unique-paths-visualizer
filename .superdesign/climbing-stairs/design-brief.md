# design-brief - climbing-stairs

Surface: problems/climbing-stairs.html (course level 1)
Goal: give a total beginner their first, gentlest dynamic programming problem.
Direction: reuse the site's dark dev-tool system (base.css); bespoke CSS only for the 1D strip,
the idea diagram, and the plain-language "what dp[i] means" callout.

New idea this level teaches: add the two ways into a stair.
Recurrence: dp[i] = dp[i-1] + dp[i-2]
Base cases: dp[0] = 1, dp[1] = 1
Worked example: 5 stairs -> [1, 1, 2, 3, 5, 8] -> 8 ways (the Fibonacci sequence).

Visual metaphor: a single row of boxes filled left to right. Amber ring = the stair one below
(a +1 move in), teal ring = the stair two below (a +2 move in). This same strip is reused by
levels 2 and 3, changing only the operator, so the "one idea" reads across the three problems.

Motion: CSS transitions only, neutralized under prefers-reduced-motion via the global base.css
block. Auto-play satisfies WCAG 2.2.2 through the real Play/Pause button.
