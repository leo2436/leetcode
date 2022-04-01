function binarySearch(nums, target) {
  let left = 0,
    right = nums.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    let ele = nums[mid];
    if (ele > target) {
      right = mid - 1;
    } else if (ele < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

let res = binarySearch([1, 2, 3, 4, 5, 6, 7], 4);
console.log("res: ", res);
