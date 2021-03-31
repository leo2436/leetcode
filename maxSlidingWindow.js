var maxSlidingWindow = function (nums, k) {
  let queue = [];
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    if (i < k) {
      if (queue.length) {
        let end = nums[queue[queue.length - 1]];
        while (num > end && queue.length) {
          queue.pop();
          if (!queue.length) break;
          end = nums[queue[queue.length - 1]];
        }
        queue.push(i);
      } else {
        queue.push(i);
      }
      if (i === k - 1) res.push(nums[queue[0]]);
    } else {
      let leaveIndex = i - k;
      if (leaveIndex === queue[0]) queue.shift();
      let end = nums[queue[queue.length - 1]];
      while (num > end && queue.length) {
        queue.pop();
        if (!queue.length) break;
        end = nums[queue[queue.length - 1]];
      }
      queue.push(i);
      res.push(nums[queue[0]]);
    }
  }
  return res;
};
var res = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
