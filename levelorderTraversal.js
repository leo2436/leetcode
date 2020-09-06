//迭代bfs
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

function levelOrder(root) {
  let res = [[]];
  if (!root) return [];
  function dfs(node, level) {
    if (res.length === level) {
      res.push([]);
    }
    res[level].push(node.val);
    if (node.left) dfs(node.left, level + 1);
    if (node.right) dfs(node.right, level + 1);
  }
  dfs(root, 0);
  return res;
}

//递归
function levelOrder(root) {
  let res = [[]];
  if (!root) return [];
  function dfs(node, level) {
    if (res.length === level) {
      res.push([]);
    }
    res[level].push(node.val);
    if (node.left) dfs(node.left, level + 1);
    if (node.right) dfs(node.right, level + 1);
  }
  dfs(root, 0);
  return res;
}


// let root = { val: 1, left: { val: 2, left: { val: 4, left: null, right: null }, right: { val: 5, left: null, right: null } }, right: { val: 3, left: null, right: null } }

// let res = levelOrder(root);
// console.log('res: ', res);