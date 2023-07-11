/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
  const parents = new Map();

  const dfs = (node, parent) => {
    if (node !== null) {
      parents.set(node, parent);
      dfs(node.left, node);
      dfs(node.right, node);
    }
  };

  dfs(root, null);

  const q = [target];
  const visited = new Set();
  visited.add(target);

  const ans = [];

  let dis = 0;
  while (q.length > 0) {
    if (dis === k) {
      for (const n of q) {
        ans.push(n.val);
      }
      break;
    }
    const size = q.length;
    for (let i = 0; i < size; i++) {
      const n = q.shift();
      if (n.left !== null && !visited.has(n.left)) {
        q.push(n.left);
        visited.add(n.left);
      }
      if (n.right !== null && !visited.has(n.right)) {
        q.push(n.right);
        visited.add(n.right);
      }
      const p = parents.get(n);
      if (p !== null && !visited.has(p)) {
        q.push(p);
        visited.add(p);
      }
    }
    dis += 1;
  }
  return ans;
};