class Solution:
    def search(self, nums: List[int], target: int) -> int:
        first = 0
        last = len(nums) - 1
       
        while first <= last:
            pos = (first + last) // 2
            if target == nums[pos]:
                return pos
            elif target > nums[pos]:
                first = pos + 1
            elif target < nums[pos]: 
                last = pos - 1           
        return -1
