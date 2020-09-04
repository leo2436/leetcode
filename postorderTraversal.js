//递归
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


//迭代
function postorderTraversal(root) {
  let stack = [root];
  let res = [];
  while (stack.length) {
    let curr = stack.pop();
    if (!curr) return stack;
    res.unshift(curr.val);
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  return res;
}