/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let res;
    const helper = (x, n) => {
        if (x === 0) return 0;
        if (n === 0) return 1;
        
        res = helper(x * x, Math.floor(n / 2))
        
        return n % 2 === 0 ? res : x * res
    } 
    
    res = helper(x, Math.abs(n));
    
    return n > 0 ? res : 1 / res;
};