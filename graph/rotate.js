// 暴力解法
// var rotate = function (matrix) {
//   let len = matrix.length;
//   let res = new Array(len).fill(0).map(() => new Array(len).fill(0));
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       res[j][len - i - 1] = matrix[i][j];
//     }
//   }
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       matrix[i][j] = res[i][j];
//     }
//   }
// };

var rotate = function (matrix) {
  const n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); ++i) {
    for (let j = 0; j < Math.floor((n + 1) / 2); ++j) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
  console.log("matrix: ", matrix);
};

let res = rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]);
