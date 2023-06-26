/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numsMap = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (!numsMap.has(nums[i])) numsMap.set(nums[i], 0);
        numsMap.set(nums[i], numsMap.get(nums[i]) + 1);
    }
   
    // Convert the Map to an array of key-value pairs
    const sortedMap = new Map([...numsMap].sort((a, b) => b[1] - a[1]));    
    const sortedMapKeys = Array.from(sortedMap.keys());
    return sortedMapKeys.slice(0, k);

};