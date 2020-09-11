var hasPathSum = function (root, sum) {
  let initValue = 0;
  function help(root, val) {
    if (!root) return false;
    if (!root.left && !root.right && root.val + val === sum) return true;
    return help(root.right, val + root.val) || help(root.left, val + root.val);
  }
  return help(root, initValue) || false;
};
