// var isBalanced = function(root) {
//   if (!root) {
//     return true;
//   } else {
//     return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
//   }

//   function height(root) {
//     if (!root) return 0;
//     return Math.max(height(root.left), height(root.right)) + 1
//   }
// };

var isBalanced = function (root) {
  const height = root => {
    if (!root) return 0;
    let left = height(root.left);
    let right = height(root.right);
    if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
    return Math.max(height(root.left), height(root.right)) + 1;
  };
  return height(root) >= 0;
};
