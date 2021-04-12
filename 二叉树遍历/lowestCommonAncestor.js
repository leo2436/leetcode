// 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

var lowestCommonAncestor = function (root, p, q) {
  let ans;
  let dfs = (root, p, q) => {
    if (!root) return false;
    let lson = dfs(root.left, p, q);
    let rson = dfs(root.right, p, q);
    if (
      (lson && rson) ||
      ((p.val === root.val || q.val === root.val) && (lson || rson))
    ) {
      ans = root;
    }
    return lson || rson || p.val === root.val || q.val === root.val;
  };
  dfs(root, p, q);
  return ans;
};
