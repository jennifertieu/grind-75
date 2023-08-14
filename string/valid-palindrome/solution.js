/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // convert new string to array, remove non-alphanumeric characters, uppercase to lowercase
  const newString = s
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, "")
    .split("");
  // initialize pointers
  let left = 0;
  let right = newString.length - 1;
  // loop through string array
  while (left <= right) {
    // if left pointer equals right pointer value, increment left pointer, decrement right pointer
    if (newString[left] === newString[right]) {
      left++;
      right--;
    } else {
      // if values are not the same, return false
      return false;
    }
  }
  return true;
};
