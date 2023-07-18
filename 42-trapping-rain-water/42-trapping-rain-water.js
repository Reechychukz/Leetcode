/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let ans = 0 
    
    let leftMax = 0 
    let rightMax = 0 

    let left = 0 
    let right = height.length - 1

    while (left <= right) {
        if (leftMax <= rightMax) {
            leftMax = Math.max(leftMax, height[left])
            ans += leftMax - height[left]
            left++
        } else {
            rightMax = Math.max(rightMax, height[right])
            ans += rightMax - height[right]
            right--
        }
    }

    return ans
};