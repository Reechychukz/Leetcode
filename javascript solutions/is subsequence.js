/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let sPointer = 0;
    
    if (t === "" && s === "")
        return true;
    
    for (let i = 0; i < t.length; i++) {
        
        if (s[sPointer] == t[i]) {
            sPointer++;
        }
        
        if (sPointer == s.length) {
            return true;
        }
    }
    
    return false;
};
