/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = (prices, fee) => {
  let minBuy = prices[0];
  let profit = 0;
  
  for(const price of prices) {
    const sellPrice = price - fee;
    if(price < minBuy) {
	    // Time travel
      minBuy = price;
    } else if(sellPrice > minBuy) {
      profit += sellPrice - minBuy;
      minBuy = sellPrice;
    }
  }
  
  return profit;
};