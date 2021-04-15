// 用中序遍历二叉搜索树可得到一个递增的数组。

var minDiffInBST = function (root) {
  let res = [];
  let dfs = root => {
    if (!root) return;
    root.left && dfs(root.left);
    res.push(root.val);
    root.right && dfs(root.right);
    return res;
  };
  let arr = dfs(root);
  let getMin = arr => {
    let i = 0,
      j = i + 1,
      len = arr.length;
    let min;
    while (j < len) {
      let diff = arr[j++] - arr[i++];
      if (!min) {
        min = diff;
      } else {
        min = min < diff ? min : diff;
      }
    }
    return min;
  };
  let result = getMin(arr);
  return result;
};
