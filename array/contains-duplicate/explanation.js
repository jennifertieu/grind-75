// Alternative Solution
// Time complexity: O(n)
// Space complexity: O(n)
var containsDuplicate = function (nums) {
  const s = new Set(nums);
  return s.size !== nums.length;
};

// NeetCode explanation

// Brute force approach would have been O(n^2) with nested loops to compare (Time: O(n), Space: O(1))
// Another approach would have been sorting it, duplicates are next to each other (Time: (n log n), Space: O(1))
// Solution was the same*
