/**
 * O(n^2) TC
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let max = 0;
    let subs = [];
    
    for (let i = 0; i < s.length; i++) {      
        if (subs.includes(s[i])) {
            subs = subs.slice(subs.indexOf(s[i]) + 1)
        }        
        subs.push(s[i]);
        max = subs.length > max ? subs.length : max;
    }
    return max;
};

/**
 * O(n) TC
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let slow = 0, fast = 0, max = 0, set = new Set();
    
    while (fast < s.length) {
        if (!set.has(s[fast])) {
            set.add(s[fast]);
            fast++;
        } else {
            set.delete(s[slow]);
            slow++;
        }
        max = set.size > max ? set.size : max
    }
    return max;
};
