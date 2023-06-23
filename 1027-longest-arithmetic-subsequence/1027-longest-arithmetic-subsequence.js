/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    let n = nums.length;
    let dp = Array(n);
    let ans = 2;
    for(let i=0;i<n;i++){
        dp[i] = new Map();
        for(let j=0;j<i;j++){
            let diff = nums[i] - nums[j];
            dp[i].set(diff,dp[j].has(diff)?dp[j].get(diff) + 1: 2);
            ans=Math.max(dp[i].get(diff),ans);
        }
    }
    return ans;
};