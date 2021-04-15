// 前序遍历第一个值为根节点，从中序遍历中找到该根节点，则中序遍历中根节点左边的值为左子树，
// 右边的值为右子树，然后进行递归。

var buildTree = function (preorder, inorder) {
  function helper(
    preorder,
    inorder,
    preorderLeft, 
    preorderRight,
    inorderLeft,
    inorderRight
  ) {
    if (preorderLeft > preorderRight) return null;
    let rootVal = preorder[preorderLeft];
    let rootIndex = map.get(rootVal);
    let root = new TreeNode(rootVal);
    let leftTreeSize = rootIndex - inorderLeft;
    root.left = helper(
      preorder,
      inorder,
      preorderLeft + 1,
      preorderLeft + leftTreeSize,
      inorderLeft,
      rootIndex - 1
    );
    root.right = helper(
      preorder,
      inorder,
      preorderLeft + leftTreeSize + 1,
      preorderRight,
      rootIndex + 1,
      inorderRight
    );
    return root;
  }
  let map = new Map();
  let len = inorder.length;
  for (let i = 0; i < len; i++) {
    map.set(inorder[i], i);
  }
  return helper(preorder, inorder, 0, len - 1, 0, len - 1);
};
