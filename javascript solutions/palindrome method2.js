/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //const revx = x.reverse();
    // return x.split("").reverse().join("");
    
    const revx = x.toString().split("").reverse().join("");
    if (revx === x.toString()){
        return true;
    } 
    
    return false;
}
