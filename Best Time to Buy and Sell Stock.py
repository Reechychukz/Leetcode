class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        prof = 0
        buy = prices[0]
        for i in range(1, len(prices)):
            if prices[i] - buy > prof:
                prof = prices[i] - buy
            if prices[i] < buy:
                buy = prices[i]
        return prof
