/* Registry of algorithm-pattern reference infographics, rendered by patterns.html.
   `title` is the controlled vocabulary problems-data.js's `pattern` field must match exactly --
   that's what lets patterns.html cross-list "problems using this pattern" with zero hardcoding.
   To add a new pattern: drop a same-style infographic as assets/img/patterns/<slug>.webp
   (convert with `cwebp -q 82 source.png -o assets/img/patterns/<slug>.webp`) and add one entry
   here with the next `order`. See CLAUDE.md for the full checklist. */
const PATTERNS = [
  {
    slug: "two-pointers",
    order: 1,
    title: "Two Pointers",
    tagline: "Move two indices strategically to reduce repeated work.",
    image: "assets/img/patterns/two-pointers.webp",
    imageAlt: "Two Pointers pattern infographic: what it is, how it works on an example array, when to use it, an implementation template, and common mistakes."
  },
  {
    slug: "sliding-window",
    order: 2,
    title: "Sliding Window",
    tagline: "Maintain a moving range instead of recalculating every subarray.",
    image: "assets/img/patterns/sliding-window.webp",
    imageAlt: "Sliding Window pattern infographic: what it is, how a fixed-size window slides across an example array, when to use it, an implementation template, and common mistakes."
  },
  {
    slug: "prefix-sum-product",
    order: 3,
    title: "Prefix Sum / Prefix Product",
    tagline: "Precompute running values so later range calculations are fast.",
    image: "assets/img/patterns/prefix-sum-product.webp",
    imageAlt: "Prefix Sum / Prefix Product pattern infographic: what it is, how range-sum queries and product-except-self use precomputed running values, when to use it, and common mistakes."
  },
  {
    slug: "hash-map-set",
    order: 4,
    title: "Hash Map / Hash Set",
    tagline: "Use fast lookup to trade extra memory for speed.",
    image: "assets/img/patterns/hash-map-set.webp",
    imageAlt: "Hash Map / Hash Set pattern infographic: what it is, how Two Sum and Contains Duplicate use fast lookup, when to use it, and common mistakes."
  },
  {
    slug: "stack",
    order: 5,
    title: "Stack",
    tagline: "Use last-in, first-out order to manage nested or recent state.",
    image: "assets/img/patterns/stack.webp",
    imageAlt: "Stack pattern infographic: what it is, how Valid Parentheses and a monotonic stack work, when to use it, and common mistakes."
  },
  {
    slug: "queue-bfs",
    order: 6,
    title: "Queue / BFS",
    tagline: "Explore level by level using first-in, first-out order.",
    image: "assets/img/patterns/queue-bfs.webp",
    imageAlt: "Queue / BFS pattern infographic: what it is, how level-order traversal and shortest path in an unweighted graph work, when to use it, and common mistakes."
  },
  {
    slug: "dfs-backtracking",
    order: 7,
    title: "DFS / Backtracking",
    tagline: "Go deep, then return and try another path.",
    image: "assets/img/patterns/dfs-backtracking.webp",
    imageAlt: "DFS / Backtracking pattern infographic: what it is, how subsets, permutations, and path search work, when to use it, and common mistakes."
  },
  {
    slug: "binary-search",
    order: 8,
    title: "Binary Search",
    tagline: "Cut the search space in half each step.",
    image: "assets/img/patterns/binary-search.webp",
    imageAlt: "Binary Search pattern infographic: what it is, how searching a sorted array and search-on-answer work, when to use it, and common mistakes."
  },
  {
    slug: "dynamic-programming",
    order: 9,
    title: "Dynamic Programming",
    tagline: "Reuse answers to overlapping subproblems.",
    image: "assets/img/patterns/dynamic-programming.webp",
    imageAlt: "Dynamic Programming pattern infographic: what it is, how Unique Paths on a 3x4 grid defines state and recurrence, when to use it, and common mistakes."
  },
  {
    slug: "greedy",
    order: 10,
    title: "Greedy",
    tagline: "Make the best local choice when it can be proven safe.",
    image: "assets/img/patterns/greedy.webp",
    imageAlt: "Greedy pattern infographic: what it is, how interval scheduling picks the earliest-finishing option, when to use it, and common mistakes."
  }
];
