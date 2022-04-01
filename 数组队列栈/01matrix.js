var updateMatrix = function (matrix) {
  let w = matrix[0].length;
  let h = matrix.length;
  if (!w || !h) return null;
  let ans = new Array(h);
  let stack = [];
  let step = 0;

  for (let i = 0; i < h; i++) {
    ans[i] = new Array(w).fill(-1);
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (matrix[i][j] === 0) {
        ans[i][j] = 0;
        stack.push([i, j]);
        console.log('stack: ', stack);
      }
    }
  }
  console.log('ans: ', ans);

  while (stack.length) {
    step++;
    let len = stack.length;
    for (let i = 0; i < len; i++) {
      let [i, j] = stack.shift();
      console.log('i: ', i);
      console.log('j: ', j);
      if (i - 1 >= 0 && ans[i - 1][j] === -1) {
        ans[i - 1][j] = step;
        stack.push([i - 1, j]);
      }
      if (i + 1 < h && ans[i + 1][j] === -1) {
        ans[i + 1][j] = step;
        stack.push([i + 1, j]);
      }
      if (j - 1 >= 0 && ans[i][j - 1] === -1) {
        ans[i][j - 1] = step;
        stack.push([i, j - 1]);
      }
      if (j + 1 < w && ans[i][j + 1] === -1) {
        ans[i][j + 1] = step;
        stack.push([i, j + 1]);
      }
    }
  }
  return ans;
};

let matrix =
  [[0], [1]]

let res = updateMatrix(matrix);
console.log('res: ', res);
