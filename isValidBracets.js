var isValid = function (s) {
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stack = [];
  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (map[char] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
