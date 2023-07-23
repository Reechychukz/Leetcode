/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    const dp = { "0" : [], "1" : [new TreeNode()]};
    function generateFBT(n) {
        if (n % 2 == 0) return [];
        if (dp[`${n}`]) return dp[`${n}`];
        const res = [];
        for (let left = 1; left < n; left++) {
            const leftTree = generateFBT(left);
            const rightTree = generateFBT(n - left - 1);  
            for (let leftNode = 0; leftNode < leftTree.length; leftNode++) {
                for (let rightNode = 0; rightNode < rightTree.length; rightNode++) {
                    const root = new TreeNode();
                    root.left = leftTree[leftNode];
                    root.right = rightTree[rightNode];
                    res.push(root);
                }                
            }
        }
        return dp[`${n}`] = res;
    }
    return generateFBT(n);
};