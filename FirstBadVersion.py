# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        beg = 1
        last = n
        pos = 1
        while beg <= last:
            mid = (beg + last) // 2
            x = isBadVersion(mid)
            if x == True:
                pos = mid
                last = mid - 1
            else:
                beg = mid + 1
                
        return pos
