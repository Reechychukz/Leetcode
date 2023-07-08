/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    let weightPairs = new Uint32Array(weights.length-1);
    for(let i = 1; i < weights.length; ++i) {
        weightPairs[i-1] = weights[i] + weights[i-1];
    }
    weights = null;
    weightPairs.sort();

    let ret = 0;

    for(let i = 0; i < (k-1); ++i) {
        ret += weightPairs[(weightPairs.length-1)-i];
        ret -= weightPairs[i];
    }

    return ret;
};