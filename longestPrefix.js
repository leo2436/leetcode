var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let first = strs[0];
  console.log("first: ", first);
  let res = "";
  for (let i = 0; i < first.length; i++) {
    let prefix = first.slice(0, i + 1);
    console.log("prefix: ", prefix);
    if (strs.every((str) => str.slice(0, i + 1) === prefix)) {
      res = prefix;
    } else {
      break;
    }
  }
  return res;
};

let res = longestCommonPrefix(["a"]);
console.log("res: ", res);
