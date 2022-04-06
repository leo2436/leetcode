var lengthOfLongestSubstring = function (s) {
  let res = 0;
  let set = new Set();
  for (let left = 0, right = 0; left < s.length; left++) {
    if (left !== 0) {
      set.delete(s[left - 1]);
    }
    while (right < s.length && !set.has(s[right])) {
      set.add(s[right]);
      right++;
    }
    res = Math.max(res, right - left);
  }
  return res;
};
