/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let sortedCosts = costs.sort((a, b) => a - b);
    let coinTracker = 0;
    let i = 0;
    
    while (coinTracker < coins || i < costs.length - 1) {
        if(costs[i] <= coins && coinTracker + costs[i] <= coins ){
            coinTracker += costs[i];
            coins - costs[i];
            i++;            
        } else return i
    }    
    return i    
};
