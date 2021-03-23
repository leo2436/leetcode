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

// 横向遍历
// var longestCommonPrefix = function(strs) {
//   if (!strs.length) return '';
//   let prefix = strs[0];
//   for (let i = 1; i < strs.length; i++) {
//     if (prefix === '') return prefix;
//     let word = strs[i];
//     let min = Math.min(prefix.length, word.length);
//     let j = 0;
//     while (j < min && prefix[j] === word[j]) {
//       j++;
//     }
//     prefix = prefix.substring(0, j);
//   }
//   return prefix;
// };

// 纵向遍历
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  let prefix = strs[0];
  let count = strs.length;
  for (let i = 0; i < prefix.length; i++) {
    let c = prefix[i];
    for (let j = 1; j < count; j++) {
      let word = strs[j];
      if (i === word.length || word[i] !== c) {
        return prefix.substring(0, i);
      }
    }
  }
  return prefix;
};
