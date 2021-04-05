//递归
var preorderTraversal = function (root) {
  function traversal(root, stack) {
    if (!root) return stack;
    stack.push(root.val);
    traversal(root.left, stack);
    traversal(root.right, stack);
    return stack;
  }
  return traversal(root, []);
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

// 先一直往根节点左边遍历，到尽头后，弹出上一个节点，并将该节点的右边节点赋值给当前指针，
// 重复往节点左边遍历的操作。
var preorderTraversal = function (root) {
  let res = [];
  let stack = [];
  while (stack.length || root) {
    while (root) {
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }
    let cur = stack.pop();
    root = cur.right;
  }
  return res;
};
