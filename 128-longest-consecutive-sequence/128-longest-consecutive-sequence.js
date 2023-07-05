/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numsSet = new Set(nums);
    let subLength = 0;
    
    for (let i = 0; i < nums.length; i++) {
        
        if (!numsSet.has(nums[i] - 1)) {
            let length = 0;
            
            while(numsSet.has(nums[i] + length)) {
            length += 1
            subLength = Math.max(length, subLength)
            }
        } 
    }
    return subLength;
};