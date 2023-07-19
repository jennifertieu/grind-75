/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // if string is odd length, then it is auto-matically invalid
  if (s.length % 2 !== 0) {
    return false;
  }

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
  return stack.length > 0 ? false : true;
};
