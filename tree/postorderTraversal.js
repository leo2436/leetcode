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


var postorderTraversal = function(root) {
  let res = [];
  let stack = [];
  let prev = null;
  while(stack.length || root) {
    while(root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    if (!root.right || root.right === prev) {
      res.push(root.val);
      prev = root;
      root = null;
    } else {
      stack.push(root);
      root = root.right;
    }
  }
  return res;
};

// 后序遍历是左右根，reverse一下就是根右左，因此只需和前序遍历方向置换一下即可。
var postorderTraversal = function(root) {
  let res = [];
  let stack = [];
  while(stack.length || root) {
    while(root) {
      res.push(root.val);
      stack.push(root);
      root = root.right;
    }
    let cur = stack.pop();
    root = cur.left;
  }
  return res.reverse();
};