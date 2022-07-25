# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        first = 0
        last = n
        pos = 0
        while first <= last:
            mid = (first + last) // 2
            x = isBadVersion(mid)
            if x == True:
                pos = mid
                last = mid - 1
            else:
                first = mid + 1
                
        return pos
