/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {
    // Generate all combinations of requests and sort by length by decreasing order
    const combination = combinations(requests).sort((a,b) => b.length - a.length)

    for(const c of combination) {
        // Create array with all zeros
        const arr = Array(n).fill(0);

        for(const [x,y] of c) ++arr[x], --arr[y];

        // If all elements still zero then net employees change is zero
        if(arr.every(v => v==0)) return c.length;
    }
};

// Function to generate all possible combination
var combinations = function(arr) {
    return arr.reduce((acc, item) => acc.concat(acc.map(x => [...x, item])), [[]]);
}