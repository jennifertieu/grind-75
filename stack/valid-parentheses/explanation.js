// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Input: s = "{[]}"
// Output: true
/* NOTE: This is valid because the opening brackets next bracket is the correct corresponding closing bracket.
The first two brackets are both opening brackets, its only until a closing bracket is encountered that the bracket is no longer valid.
We can add as many opening parenthesis as we want as long as there is are corresponding closing parentheses */

// NOTE: We would be using a stack data structure because a closing parentheses would need to be matched with the most recent opening parentheses

// Use hashmap (dict) to determine is an opening bracket matches closing bracket

// Time Complexity: O(n) - iterate through every input character once
// Space Complexity: O(n) - using a stack, up to size of input

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  const closeToOpen = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const i of s) {
    // if closing bracket, check stack (verify stack is not empty)
    if (Object.keys(closeToOpen).includes(i)) {
      // if closing bracket matches the top (most recent) opening bracket in the stack, pop opening bracket off the stack
      if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[i]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      // not a closing bracket (opening bracket), add to stack
      stack.push(i);
    }
  }

  // return true if stack is empty, else its false
  return stack.length > 0 ? true : false;
};
