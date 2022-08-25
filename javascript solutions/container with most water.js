/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxAmount = 0;
    
    while (left < right) {
        let width = right - left;
        let minHeight = Math.min(height[right], height[left])
        maxAmount = Math.max(maxAmount, minHeight * width);
        
        if (height[left] <= height[right])
            left++;
        else
            right--;
    }
    
    return maxAmount;
};
