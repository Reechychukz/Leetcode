/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    const [smap, tmap] = [{}, {}];
    for (let i = 0; i < s.length; i++) {
        if (s[i] in smap) smap[s[i]] += 1
        else smap[s[i]] = 0;
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] in tmap) tmap[t[i]] += 1
        else tmap[t[i]] = 0;
    }
    
    for (letter in smap) {
        if (smap[letter] !== tmap[letter]) return false
    }
    
    return true;
};
