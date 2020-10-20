// 只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

// 示例 1:

// 输入: [2,2,1]
// 输出: 1
// 示例 2:

// 输入: [4,1,2,1,2]
// 输出: 4

// var singleNumber = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let tmp = nums[i];
//     if (nums.indexOf(tmp) === nums.lastIndexOf(tmp)) return tmp;
//   }
// };

// var singleNumber = function(nums) {
//   let set = new Set(nums);
//   let arr = Array.from(set);
//   let double = 2 * arr.reduce((a, b) => a + b);
//   let sum = nums.reduce((a, b) => a + b);
//   return double - sum;
// };

var singleNumber = function(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    res ^= nums[i];    
  }
  return res;
};