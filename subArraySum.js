function subArraySum(nums) {
  let map = new Map();
  let sum = 0;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum)) {
      res.push(map.get(sum) + 1);
      res.push(i);
      break;
    } else {
      map.set(sum, i);
    }
  }
  return res;
}

let nums = [-3, 1, -4, 2, -3, 4];
let res = subArraySum(nums);
console.log("res: ", res);
