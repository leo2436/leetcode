//递归
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