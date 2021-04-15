// 优化点：当k=栈的长度时，直接返回栈最后一个元素。

var kthSmallest = function (root, k) {
  function midOrderTraversal(root) {
    let stack = [];
    let res = [];
    while (root || stack.length) {
      while (root) {
        stack.push(root);
        root = root.left;
      }
      let cur = stack.pop();
      res.push(cur.val);
      if (res.length === k) return res[res.length - 1];
      root = cur.right;
    }
    return res;
  }
  let result = midOrderTraversal(root);
  return result;
};
