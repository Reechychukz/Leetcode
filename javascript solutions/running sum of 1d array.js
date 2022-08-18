/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let i = sum = 0;
    const out = new Array(nums.length);
    while (i < nums.length) {
        sum += nums[i];
        out[i] = sum;
        i++
    }
    return out;
};
