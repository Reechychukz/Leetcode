class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:  
        checked = {}
        for i, value in enumerate(nums):
            remainder = target - value
            
            if remainder in checked:
                return i, checked[remainder]
            
            checked[value] = i
