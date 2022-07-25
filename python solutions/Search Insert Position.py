class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        first = 0
        pos = 0
        last = len(nums) - 1
        
        while first <= last:
            pos = (first + last) // 2
            if target == nums[pos]:
                return pos
            elif target > nums[pos]:
                first = pos + 1
            else:
                last = pos - 1
        
        return first  
