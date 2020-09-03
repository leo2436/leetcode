var postorderTraversal = function (root) {
  function traversal(root, stack) {
    if (!root) return stack;
    if (root.left) traversal(root.left, stack);
    if (root.right) traversal(root.right, stack);
    stack.push(root.val);
    return stack;
  }
  return traversal(root, [])
};