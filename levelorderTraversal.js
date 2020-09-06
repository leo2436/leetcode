var levelOrder = function (root) {
  let res = [];
  let queue = [];
  if (!root) return res;
  queue.push(root);
  while (queue.length) {
    res.push([]);
    let level = queue.length;
    for (let i = 0; i < level; i++) {
      let node = queue.shift();
      res[res.length - 1].push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return res;
};