class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxCandy = max(candies)
        boolResult = []
        
        for candy in candies:
            if candy + extraCandies >= maxCandy:
                boolResult.append(True)
            else:
                boolResult.append(False)
        
        return boolResult
