/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   let result = new Map()
    strs.forEach(str=>{
        let sorted = str.split("").sort().join("");
        if(result.has(sorted)){
            result.set(sorted, [...result.get(sorted),str])
        }
        else{
            result.set(sorted, [str])
        }
    });
    return Array.from(result.values());
};