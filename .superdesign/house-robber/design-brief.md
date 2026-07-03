# design-brief - house-robber

Surface: problems/house-robber.html (course level 3)
Goal: introduce a real take-it-or-leave-it choice on the same strip, closing the 1D trilogy.
Direction: reuse the site's dark dev-tool system; bespoke CSS for the money-row-over-answer-row
strip and the skip-versus-rob idea diagram.

New idea this level teaches: choose take or skip, keep the larger (min becomes max, with a
neighbor constraint).
Recurrence: dp[i] = max(dp[i-1], dp[i-2] + nums[i])
Base cases: dp[0] = nums[0], dp[1] = max(nums[0], nums[1])
Worked example: nums = [2, 7, 9, 3, 1] -> answer 12 (rob houses 0, 2, 4). The chosen plan
alternates rob/skip/rob, so the max visibly decides at each house.

Visual metaphor: each column is a money box (top) over a dp cell (bottom). Amber ring = the skip
plan (best up to the previous house), teal ring = the rob plan (this house plus best two back);
the robbed house's money box is marked when robbing wins.
Motion: transitions only, neutralized under prefers-reduced-motion globally.
