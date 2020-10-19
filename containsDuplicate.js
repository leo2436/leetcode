// 存在重复元素
// 给定一个整数数组，判断是否存在重复元素。

// 如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

//  

// 示例 1:

// 输入: [1,2,3,1]
// 输出: true
// 示例 2:

// 输入: [1,2,3,4]
// 输出: false


// var containsDuplicate = function(nums) {
//   let s = new Set(nums);
//   return s.size !== nums.length;
// };

// var containsDuplicate = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let num = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] === num) return true;
//     }
//   }
//   return false;
// };

var containsDuplicate = function(nums) {
  let map = new Map();
  for(let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    map.set(nums[i], i);
  }
  return false;
}