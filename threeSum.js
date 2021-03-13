var threeSum = function (nums) {
  let result = [];
  if (nums.length < 3) return result;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; ++i) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let first = nums[i];
    let secondIndex = i + 1;
    let lastIndex = nums.length - 1;
    while (secondIndex < lastIndex) {
      let second = nums[secondIndex];
      let last = nums[lastIndex];
      if (first + second + last === 0) {
        result.push([first, second, last]);
        while (
          secondIndex < lastIndex &&
          nums[secondIndex] === nums[secondIndex + 1]
        ) {
          secondIndex++;
        }
        secondIndex++;
        while (
          secondIndex < lastIndex &&
          nums[lastIndex] === nums[lastIndex - 1]
        ) {
          lastIndex--;
        }
        lastIndex--;
      } else if (first + second + last < 0) {
        secondIndex++;
      } else {
        lastIndex--;
      }
    }
  }
  return result;
};

let nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);
