/**
 * @param {number[]} nums
 * @return {number}
 */
function findNumberOfLIS(nums) {
    
    const dp = [];
    let maxLength = 0;
    
    for (let i = 0; i < nums.length; i++) {
        
        let max = 0;
        let sum = 1;
        
        for (let j = i - 1; j >= 0; j--) {
            
            if (nums[j] < nums[i] && dp[j][0] >= max) {
                
                if (dp[j][0] > max) {
                    max = dp[j][0];
                    sum = 0;
                }
                
                sum += dp[j][1];
                
            }
            
        }
        
        dp[i] = [1 + max, sum];
        
        maxLength = Math.max(maxLength, dp[i][0]);
        
    }
    
    let sum = 0;
    
    for (const [l, n] of dp) {
        if (l === maxLength) {
            sum += n;
        }
    }
        
    return sum;
    
}