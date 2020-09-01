//递归
var preorderTraversal = function (root) {
  function traversal(root, stack) {
    if (!root) return stack;
    stack.push(root.val)
    traversal(root.left, stack);
    traversal(root.right, stack);
    return stack
  }
  return traversal(root, [])
};