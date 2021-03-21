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
