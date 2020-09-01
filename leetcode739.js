var dailyTemperatures = function (T) {
  let res = []
  for (let i = 0; i < T.length; i++) {
    var stack = []
    var tem = T[i]
    res[i] = 0
    for (let j = i + 1; j < T.length; j++) {
      if (T[j] <= tem) {
        stack.push(T[j])
      } else {
        res[i] = (stack.length + 1)
        break
      }
    }
  }
  return res
}
var temperatures = [89, 62, 70, 58, 47, 47, 46, 76, 100, 70]
console.log('dailyTemperatures(temperatures): ', dailyTemperatures(temperatures));


//栈解法 时间复杂度O(N), 空间复杂度O(N)
//创建一个栈，遍历数组，第一个数组下标入栈，
//如果下一个数组元素值大于栈顶元素，栈顶元素出栈，同时将坐标差值赋给结果数组
//如果下个数组元素小于栈顶元素，则该数组元素下标入栈
var dailyTemperatures = function (T) {
  let res = new Array(T.length).fill(0)
  let stack = []
  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[stack[stack.length - 1]] < T[i]) {
      let idx = stack.pop()
      res[idx] = i - idx
    }
    stack.push(i)
  }
  return res
}