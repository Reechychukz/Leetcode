/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const newS = s.replace(/[\W_]/g, "").toLowerCase().split('');    
    let left = 0,
        right = newS.length - 1;
    
    while(left <= right) {
        if (newS[left] !== newS[right]) return false;        
        left++;
        right--;
    }    
    return true;
};