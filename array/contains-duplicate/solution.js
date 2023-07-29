/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let numDict = {};

  for (const n of nums) {
    if (numDict[n]) {
      return true;
    }
    numDict[n] = 1;
  }
  return false;
};

// Time: O(n)
// Space: O(n) - hashmap (dictionary)
