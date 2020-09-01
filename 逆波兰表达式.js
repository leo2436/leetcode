var evalRPN = function (tokens) {
  var stack = []
  let tmp
  for (let i = 0; i < tokens.length; i++) {
    switch (tokens[i]) {
      case '+':
        stack.push(stack.pop() + stack.pop())
        break
      case '-':
        tmp = stack.pop();
        stack.push(stack.pop() - tmp)
        break
      case '*':
        stack.push(stack.pop() * stack.pop())
        break
      case '/':
        tmp = stack.pop();
        stack.push(parseInt(stack.pop() / tmp))
        break
      default:
        stack.push(parseInt(tokens[i]))
    }
  }
  return stack.pop()
};

var t = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
console.log('evalRPN(t): ', evalRPN(t));