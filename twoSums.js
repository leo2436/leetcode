var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let goal = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === goal && i !== j) {
        return [i, j];
      }
    }
  }
};

var twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let goal = target - nums[i];
    if (map.has(goal)) {
      return [map.get(goal), i];
    }
    map.set(nums[i], i);
  }
};

let nums = [2, 7, 11, 15], target = 9
let test = twoSum(nums, target);
console.log('test: ', test);