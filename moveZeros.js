// var moveZeroes = function(nums) {
//   let j = 0;
//   for(let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       nums[j] = nums[i];
//       j++;
//     }
//   }
//   for(let i = j; i < nums.length; i++) {
//     nums[i] = 0;
//   }
//   return nums;
// };

var moveZeroes = function(nums) {
  let j = 0;
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      j++;
    }
  }
  return nums;
};

let res = moveZeroes([1, 2, 0, 0, 2, 3]);
console.log('res: ', res);