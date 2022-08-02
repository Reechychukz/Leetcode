/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i = 0 //left pointer
    let m = 1 //right pointer
    let originalLength = s.length
    while (i < originalLength) {
        s.push(s[originalLength - m])
        i++;
        m++;
    }
    s.splice(0, originalLength);
};

/**
 * Alternative solution
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start = 0;
    let end = s.length - 1;
    while (start <= end) {
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
};
