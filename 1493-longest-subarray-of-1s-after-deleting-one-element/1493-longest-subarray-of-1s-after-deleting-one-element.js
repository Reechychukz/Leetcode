/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let start = 0,
        countZeros = 0,
        longestWindow = 0;
    
    for (let i = 0; i < nums.length; i++) {
        countZeros += (nums[i] === 0);
    
        while(countZeros > 1) {
            countZeros -= (nums[start] == 0);
            start++
        }
    
        longestWindow = Math.max(longestWindow, i - start);
    }
    return longestWindow;
};