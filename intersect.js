// 两个数组的交集 II
// 给定两个数组，编写一个函数来计算它们的交集。

//  

// 示例 1：

// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]
// 示例 2:

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]


var intersect = function (nums1, nums2) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i])) {
      map.set(nums1[i], map.get(nums1[i]) + 1);
    } else {
      map.set(nums1[i], 1);
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      res.push(nums2[i]);
      map.set(nums2[i], map.get(nums2[i]) - 1);
      if (map.get(nums2[i]) === 0) {
        map.delete(nums2[i]);
      }
    }
  }
  return res;
};