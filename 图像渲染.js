let image = [[1, 1, 1],
[1, 1, 0],
[1, 0, 1]]

var floodFill = function (image, sr, sc, newColor) {
  let start = image[sr][sc];
  console.log('start: ', start);

  function dfs(sr, sc) {
    console.log('sr: ', sr, sc);
    if (image[sr][sc] === start) {
      image[sr][sc] = newColor;
      if (sr >= 1) dfs(sr - 1, sc);
      if (sr < image.length - 1) dfs(sr + 1, sc);
      if (sc >= 1) dfs(sr, sc - 1);
      if (sc < image[0].length - 1) dfs(sr, sc + 1);
    }
  }
  dfs(sr, sc);
  return image;
};

let res = floodFill([[0, 0, 0], [0, 0, 0]],
  0,
  0,
  2);
console.log('res: ', res);