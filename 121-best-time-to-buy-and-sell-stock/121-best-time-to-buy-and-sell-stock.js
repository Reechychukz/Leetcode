/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l = 0,
        r = 1,
        maxProfit = 0;
    
    while (r < prices.length) {
        maxProfit = Math.max(maxProfit, prices[r] - prices[l])
        if (prices[l] > prices[r]) l = r;
        r++;
    }
    
    return maxProfit;
};