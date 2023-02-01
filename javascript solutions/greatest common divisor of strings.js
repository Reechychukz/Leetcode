/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
    const findGCD = (a,b) => {
        return b == 0 ? a : findGCD(b,a%b);
    }

    if(str1 + str2 === str2 + str1){
        const gcd =  findGCD(str1.length,str2.length);
        return str1.slice(0,gcd);

    }else{
        return ""
    }
};
