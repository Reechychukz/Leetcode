/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0
    let right = 0
    let sum  = 0
    let min = Infinity
    while (right < nums.length) {
        sum += nums[right]
        right++ 
        while (sum >= target) {
            min = Math.min(min,right - left)
            sum -= nums[left]
            left++
        }
    }   
    return (min==Infinity?0:min)
};
