/**
 * using number manipulation
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let revx = 0;
    let y = x;
    while (x > 0){
        let lastDigit = x % 10;
        revx = lastDigit + (Math.floor(10 * revx));
        x = Math.floor(x / 10);
    }
    if (revx == y){
        return true;
    } 
    return false;
    
}
