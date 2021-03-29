// 利用栈
var removeDuplicates = function (S) {
  let stack = [];
  for (let c of S) {
    let top = stack[stack.length - 1];
    if (c !== top) {
      stack.push(c);
    } else {
      stack.pop();
    }
  }
  return stack.join("");
};
