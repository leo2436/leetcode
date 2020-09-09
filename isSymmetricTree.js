// 递归
var isSymmetric = function (root) {
  function help(left, right) {
    if (left === null && right === null) return true;
    if (left && right) {
      return (
        left.val === right.val &&
        help(left.right, right.left) &&
        help(left.left, right.right)
      );
    } else {
      return false;
    }
  }
  if (!root) {
    return true;
  } else {
    return help(root.left, root.right);
  }
};

// bfs
function isSymmetric(root) {
  if (!root) return true;
  let queue = [root.left, root.right];
  while (queue.length) {
    let left = queue.shift();
    let right = queue.shift();
    if (left === null && right === null) continue;
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;
    queue.push(left.left);
    queue.push(right.right);
    queue.push(left.right);
    queue.push(right.left);
  }
  return true;
}
