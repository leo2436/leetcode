function quick(arr) {
  if (arr.length <= 1) return arr;
  let pivotIdx = Math.floor(arr.length / 2);
  let pivot = arr[pivotIdx];
  let left = [],
    right = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (i !== pivotIdx) {
      if (num < pivot) {
        left.push(num);
      } else {
        right.push(num);
      }
    }
  }
  return quick(left).concat(pivot, quick(right));
}

// var quickSort = function (arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   var pivotIndex = Math.floor(arr.length / 2);
//   var pivot = arr.splice(pivotIndex, 1)[0];
//   var left = [];
//   var right = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat([pivot], quickSort(right));
// };

let res = quick([5, 4, 3, 2, 1]);
console.log("res: ", res);
