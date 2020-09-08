// dfs
var maxDepth = function (root) {
  if (!root) return 0;
  let ans = 1;
  function max(root, depth) {
    if (!root) return depth;
    if (!root.left && !root.right) ans = Math.max(ans, depth);
    max(root.left, depth + 1);
    max(root.right, depth + 1);
  }
  max(root, ans);
  return ans
};


// bfs
function maxDepth(root) {
  if (!root) return 0;
  let queue = [root];
  let ans = 1;
  while (queue.length) {
    let level = queue.length;
    for (let i = 0; i < level; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (queue.length) ans++;
  }
  return ans;
}