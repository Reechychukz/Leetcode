/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let currCount = 0;
    let maxCount = 0;
    let last = null
    let sortedNums = nums.sort((a,b) => a - b);

    for(let num of sortedNums) {
        if(last === num) continue;
        last+1 === num ? currCount++ : currCount = 1;
        last = num;
        maxCount = Math.max(currCount, maxCount)
    }
    
    return maxCount;
};