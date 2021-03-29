// 迭代字符串：

// 如果当前字符与栈顶元素相同，则栈顶元素计数器加 1。

// 否则，计数器设为 1，当前字符压入栈。
// 如果栈顶元素计数器等于 k，则弹出栈顶元素。

// 使用栈中元素和计数器构建结果字符串。

class Pair {
  constructor(c) {
    this.value = c;
    this.time = 1;
  }
}

var removeDuplicates = function (s, k) {
  let stack = [];
  for (let c of s) {
    let top = stack[stack.length - 1];
    if (top && top.value !== c) {
      stack.push(new Pair(c));
    } else if (top && top.value === c) {
      top.time++;
      if (top.time === k) {
        stack.pop();
      }
    } else if (!top) stack.push(new Pair(c));
  }
  return stack
    .map((item) => new Array(item.time).fill(item.value).join(""))
    .join("");
};
