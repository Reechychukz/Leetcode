/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    let result = [];
    nums.sort((a,b) => a-b)
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        let target = 0 - nums[i],
            l = i + 1,
            r = nums.length - 1;
        
        while (l < r) {            
            let sum = nums[l] + nums[r];
            
            if (sum === target) {
                result.push([nums[i], nums[l], nums[r]])
                l++
                while(nums[l] === nums[l-1] && l < r) l++                
            }
            
            else if (sum > target) r--            
            else l++
        }
    }
    
    return result;
};
