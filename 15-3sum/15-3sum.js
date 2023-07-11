/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    let result = [];
    let sortedNums = nums.sort((a,b) => a-b)
    for (let i = 0; i < nums.length - 1; i++) {
        if (i > 0 && nums[i] == nums[i-1]) continue;
        let target = 0 - sortedNums[i],
            l = i + 1,
            r = nums.length - 1;
        
        while (l < r) {
            
            let sum = sortedNums[l] + sortedNums[r];
            if (sum === target) {
                result.push([sortedNums[i], sortedNums[l], sortedNums[r]])
                l++
                while(nums[l] === nums[l-1] && l < r) {
                    l++
                }
            }
            
            else if (sum > target) r--
            
            else l++
        }
    }
    
    return result;
};
