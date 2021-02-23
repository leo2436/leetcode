var strStr = function (haystack, needle) {
  if (needle === "") return 0;
  let h = haystack.length,
    n = needle.length;
  for (let i = 0; i < h; i++) {
    if (haystack[i] === needle[0]) {
      let flag = true;
      for (let j = 1; j < n; j++) {
        if (haystack[i + j] !== needle[j]) {
          flag = false;
          break;
        }
      }
      if (flag) return i;
    }
  }
  return -1;
};

let res = strStr("mississippi", "issip");
console.log("res: ", res);
