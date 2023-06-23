/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsMap = new Map();
    let remainder = 0;
    
    //console.log(numsMap)
    for (let i = 0; i < nums.length; i++) {
        remainder = target - nums[i];
        if (numsMap.has(remainder)) return [numsMap.get(remainder), i];
        
        else numsMap.set(nums[i], i);
    }
};