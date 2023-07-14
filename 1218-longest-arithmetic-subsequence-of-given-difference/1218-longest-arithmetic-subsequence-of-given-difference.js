/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
    const dp = new Map(); // Map to store the length of the longest subsequence ending at each element

    let maxLength = 0;
    for (const num of arr) {
        const prevLength = dp.get(num - difference) || 0; // Length of the subsequence ending at the previous element with a difference of 'difference'
        const currLength = prevLength + 1; // Length of the subsequence ending at the current element with a difference of 'difference'
        dp.set(num, currLength);
        maxLength = Math.max(maxLength, currLength);
    }

    return maxLength;
};