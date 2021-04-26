// Fisher - Yates 洗牌算法在每次迭代中，生成一个范围在当前下标到数组末尾元素下标之间的随机整数。
// 接下来，将当前元素和随机选出的下标所指的元素互相交换 -
//   这一步模拟了每次从 “帽子” 里面摸一个元素的过程，
// 其中选取下标范围的依据在于每个被摸出的元素都不可能再被摸出来了。
// 此外还有一个需要注意的细节，当前元素是可以和它本身互相交换的
//   - 否则生成最后的排列组合的概率就不对了

var Solution = function (nums) {
  this.arr = nums;
  this.copy = JSON.parse(JSON.stringify(nums));
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.copy;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  function swap(arr, first, second) {
    let tmp = arr[first];
    arr[first] = arr[second];
    arr[second] = tmp;
  }
  for (let i = 0; i < this.arr.length; i++) {
    let randomIdx = i + Math.floor(Math.random() * (this.arr.length - i));
    swap(this.arr, i, randomIdx);
  }
  return this.arr;
};
