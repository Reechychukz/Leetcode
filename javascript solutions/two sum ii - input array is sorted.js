/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l = 0;
    let r = numbers.length - 1;
    
    while (l < r) {
        let sum = numbers[l] + numbers[r];        
        
        if (sum > target) {
            r--;
            continue
        } else if (sum < target) {
            l++;
            continue
        }        
        return [l + 1, r + 1]
    }
};
