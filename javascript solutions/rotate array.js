/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    if (nums.length > k) {
        let len = nums.length - k;
        let split = nums.splice(len);
        nums.unshift(...split);
    }
    else {
        let i = 0;
        while (i < k) {
            nums.unshift(nums.pop());
            i++;
        }
    }
};
