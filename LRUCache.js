var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  } else if (this.cache.size >= this.capacity) {
    let keys = this.cache.keys();
    let first = keys.next().value;
    this.cache.delete(first);
  }
  this.cache.set(key, value);
};
