/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {  
    let left = 0,
        right = s.length - 1;
    
    while(left < right) {
        while ((left < right) && (!isAlphaNum(s[left]))) {
            left++;
        }
        
        while ((right > left) && (!isAlphaNum(s[right]))) {
            right--;
        }
        
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++;
        right--;
    }    
    return true;
};

var isAlphaNum = (s) => {
     return (65 <= s.charCodeAt(0) && s.charCodeAt(0) <= 90) ||
            (97 <= s.charCodeAt(0) && s.charCodeAt(0) <= 122) ||
            (48 <= s.charCodeAt(0) && s.charCodeAt(0) <= 57);
}