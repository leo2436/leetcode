// var inorderTraversal = function(root) {
//   let res = [];
//   function helper(root) {
//     if (!root) return;
//     root.left && helper(root.left);
//     res.push(root.val);
//     root.right && helper(root.right);
//   }
//   helper(root);
//   return res;
// };

// root指针先一直遍历左节点，每次遍历把左节点加入stack中。
// 将出栈的节点的值加入到res中，并将节点的右节点赋值给指针。
var inorderTraversal = function (root) {
  let res = [];
  let stack = [];
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    let node = stack.pop();
    res.push(node.val);
    root = node.right;
  }
  return res;
};

//node作为val值进入stack，这样出栈的时候就能优先进入res。
var inorderTraversal = function (root) {
  let res = [];
  let stack = [];
  stack.push(root);
  while (stack.length) {
    let node = stack.pop();
    if (!node) continue;
    if (node instanceof TreeNode) {
      stack.push(node.right, node.val, node.left);
    } else {
      res.push(node);
    }
  }
  return res;
};
