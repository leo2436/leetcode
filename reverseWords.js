var reverseWords = function (s) {
  let res = [];
  let strs = [];
  let left = 0,
    right = s.length - 1;
  while (s[left] === " ") {
    left++;
  }
  while (s[right] === " ") {
    right--;
  }
  while (left <= right) {
    let char = s[left];
    if (char === " " && strs.length) {
      res.unshift(strs.join(""));
      strs = [];
    } else if (char !== " ") {
      strs.push(char);
    }
    left++;
  }
  res.unshift(strs.join(""));
  return res.join(" ");
};
