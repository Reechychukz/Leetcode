/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const generatePermutation = function(nums, start,end, result){
    if(start === end) {
        result.push([...nums]);
        return;
    }
    for(let i= start; i<=end; i++) {
        [nums[start], nums[i]] = [nums[i], nums[start]];
        generatePermutation(nums, start+1, end, result);
        [nums[start], nums[i]] = [nums[i], nums[start]]
    }
    
}

var permute = function(nums) {
    const result = [];
    const n = nums.length;
    const start = 0;
    const end = n-1;

    generatePermutation(nums, start, end, result)
    return result;
};