// 双端队列：维持一个单调递减的队列，入队数大于队尾数则弹出队尾数。
// 队首数离开滑动窗口，则出队。
var maxSlidingWindow = function (nums, k) {
  let queue = [];
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let leaveIndex = i - k;
    if (leaveIndex === queue[0]) queue.shift();
    let end = nums[queue[queue.length - 1]];
    while (num > end && queue.length) {
      queue.pop();
      if (!queue.length) break;
      end = nums[queue[queue.length - 1]];
    }
    queue.push(i);
    if (i >= k - 1) res.push(nums[queue[0]]);
  }
  return res;
};

// 简化
// var maxSlidingWindow = function (nums, k) {
//   const deque = [];
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     // 把滑动窗口之外的踢出
//     if (i - deque[0] >= k) {
//       deque.shift();
//     }
//     while (nums[deque[deque.length - 1]] <= nums[i]) {
//       deque.pop();
//     }
//     deque.push(i);
//     if (i >= k - 1) {
//       result.push(nums[deque[0]]);
//     }
//   }
//   return result;
// };

var res = maxSlidingWindow([9, 11], 2);
console.log("res: ", res);
