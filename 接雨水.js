// 当前方块可接雨水为其左右两边最高方块间的最小值减去当前方块高度

// var trap = function(height) {
//   let ans = 0;
//   function max(arr, start, end) {
//     let res = 0;
//     for (let i = start; i <= end; i++) {
//       let num = arr[i];
//       res = res >= num ? res : num;
//     }
//     return res;
//   }
//   for (let i = 0; i < height.length; i++) {
//     let curr = height[i];
//     let leftMax = max(height, 0, i);
//     let rightMax = max(height, i, height.length - 1);
//     let capacity = Math.min(leftMax, rightMax) - curr;
//     ans += capacity;
//   }
//   return ans;
// };

// 动态规划
var trap = function (height) {
  let ans = 0;
  let leftMaxArr = [];
  let rightMaxArr = [];
  leftMaxArr[0] = height[0];
  rightMaxArr[height.length - 1] = height[height.length - 1];
  for (let i = 1; i < height.length; i++) {
    leftMaxArr[i] = Math.max(height[i], leftMaxArr[i - 1]);
  }
  for (let i = height.length - 2; i >= 0; i--) {
    rightMaxArr[i] = Math.max(height[i], rightMaxArr[i + 1]);
  }
  for (let i = 0; i < height.length; i++) {
    ans += Math.min(leftMaxArr[i], rightMaxArr[i]) - height[i];
  }
  return ans;
};

// 双指针
// 当左侧最大值小于右侧最大值的时候，从左侧开始遍历，
// 遇到比leftMax大的，将值赋给leftMax, 比leftMax小的则减去方块高度。右侧同理
var trap = function (height) {
  let ans = 0;
  let leftMax = 0;
  let rightMax = 0;
  let left = 0,
    right = height.length - 1;
  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        ans += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        ans += rightMax - height[right];
      }
      right--;
    }
  }
  return ans;
};
