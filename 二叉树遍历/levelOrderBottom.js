var levelOrderBottom = function (root) {
  if (!root) return [];
  let res = [];
  let stack = [root];
  while (stack.length) {
    let level = [];
    let len = stack.length;
    for (let i = 0; i < len; i++) {
      let node = stack.shift();
      level.push(node.val);
      node.left && stack.push(node.left);
      node.right && stack.push(node.right);
    }
    res.unshift(level);
  }
  return res;
};
