// var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

// let res = [];
// var flatten = function (arr) {
//   for (let i = 0; i < arr.length; ++i) {
//     if (Array.isArray(arr[i])) {
//       flatten(arr[i]);
//     } else {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// };

// var uniq = function (arr) {
//   return Array.from(new Set(arr));
// };

// var sort = function (arr) {
//   return arr.sort((a, b) => a - b);
// };

// let result = sort(uniq(flatten(arr)));
// console.log("result: ", result);

const flattenDeep = (array) => array.flat(Infinity);

// 去重
const unique = (array) => Array.from(new Set(array));

// 排序
const sort = (array) => array.sort((a, b) => a - b);

// 函数组合
const compose = (...fns) => {
  return (initValue) => {
    console.log("initValue: ", initValue);
    return fns.reduceRight((y, fn) => {
      console.log("y: ", y);
      return fn(y);
    }, initValue);
  };
};

function comp(...funcs) {
  return (initData) => {
    return funcs.reduceRight((prev, curr) => curr(prev), initData);
  };
}

// 组合后函数
const flatten_unique_sort = comp(sort, unique, flattenDeep);

// 测试
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
console.log(flatten_unique_sort(arr));
