// 递归
var inorderTraversal = function (root) {
  function traversal(root, stack) {
    if (!root) return stack;
    if (root.left) traversal(root.left, stack);
    stack.push(root.val);
    if (root.right) traversal(root.right, stack);
    return stack;
  }
  return traversal(root, []);
};

// 迭代
function inorderTraversal(root) {
  let curr = root;
  let stack = [];
  let res = [];
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
      continue;
    }
    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }
  return res;
}
