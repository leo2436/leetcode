var minSubArrayLen = function(target, nums) {
    let sum = 0;
    let result = 0;
    for (let i = 0, j = 0; i < nums.length; i++) {
        sum += nums[i];
        while (sum >= target) {
            if (result === 0) {
                result = i - j + 1;
            } else {
                result = Math.min(result, i - j + 1);
            }
            sum -= nums[j];
            j++;
        }
    }
    return result;
};