/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0,
        r = 0,
        maxSub = 0,
        set = new Set();
    
    set.add(s[l]);
    while (r < s.length) {
        while (set.has(s[r])) {
            set.delete(set.values().next().value);
            l++;
        }
        
        set.add(s[r])
        maxSub = Math.max(maxSub, set.size);
        r++;
    } 

    return maxSub;
};