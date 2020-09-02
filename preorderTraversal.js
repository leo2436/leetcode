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

//迭代 栈
var preorderTraversal = function (root) {
  let res = [];
  let stack = [root];
  if (!root) return res;
  while (stack.length) {
    let cur = stack.pop();
    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
    res.push(cur.val);
  }
  return res;
};