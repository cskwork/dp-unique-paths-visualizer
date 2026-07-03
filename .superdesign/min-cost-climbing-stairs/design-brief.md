# design-brief - min-cost-climbing-stairs

Surface: problems/min-cost-climbing-stairs.html (course level 2)
Goal: introduce a cost and a min choice on the exact strip a beginner just learned.
Direction: reuse the site's dark dev-tool system; bespoke CSS for the cost-row-over-answer-row
strip and the two-priced-routes idea diagram.

New idea this level teaches: keep the cheaper of two routes (add becomes min).
Recurrence: dp[i] = min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
Base cases: dp[0] = 0, dp[1] = 0 (free to start on stair 0 or 1)
Worked example: cost = [10, 15, 20, 5, 25] -> answer 20. The winning route alternates between the
one-below and two-below stair, so the min visibly chooses rather than always picking one side.

Visual metaphor: each column is a cost box (dashed, top) over a dp cell (bottom). Amber ring =
route from one stair below, teal ring = route from two below, the filled cell is the cheaper.
Motion: transitions only, neutralized under prefers-reduced-motion globally.
