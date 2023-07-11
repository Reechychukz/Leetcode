/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0,
        r = height.length - 1,
        len = height.length - 1,
        amount = 0,
        maxAmount = -Infinity;
    
    while (l < r) {
        amount = Math.min(height[l], height[r]) * len;
        maxAmount = Math.max(maxAmount, amount);
        
        height[l] > height[r] ? r-- : l++;
        len--
    }
    
    return maxAmount;
};