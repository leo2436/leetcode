// 设计一个支持在平均 时间复杂度 O(1) 下，执行以下操作的数据结构。

// insert(val)：当元素 val 不存在时，向集合中插入该项。
// remove(val)：元素 val 存在时，从集合中移除该项。
// getRandom：随机返回现有集合中的一项。每个元素应该有相同的概率被返回。

// getRandom的时候哈希表转数组时间复杂度为O(N)，因此需要一个辅助数组储存数据。

var RandomizedSet = function () {
  this.map = new Map();
  this.arr = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (!this.map.has(val)) {
    this.map.set(val, this.arr.length);
    this.arr.push(val);
    return true;
  } else {
    return false;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map.has(val)) {
    let index = this.map.get(val);
    if (index === this.arr.length - 1) {
      this.arr.pop();
      this.map.delete(val);
    } else {
      let lastVal = this.arr.pop();
      this.arr[index] = lastVal;
      this.map.set(lastVal, index);
      this.map.delete(val);
    }
    return true;
  } else {
    return false;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  let len = this.arr.length;
  return this.arr[Math.floor(Math.random() * len)];
};
