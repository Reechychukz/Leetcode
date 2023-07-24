/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (x === 0) return 0;
    
    return x ** n; 
    
//     let counter = 0;
//     let result = 1;
    
//     while (counter < Math.abs(n)) {
//         result *= x;
//         counter++
//     }
    
//     if (n > 0) return result;
    
//     else return 1 / result;
    
};