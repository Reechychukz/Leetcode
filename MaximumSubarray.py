class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maximum = max(nums)
        if maximum < 0:
            return maximum
        
        present_max = 0
        max_ending_here = 0
        for i in nums:
            max_ending_here += i
            max_ending_here = max(max_ending_here, 0)
            
            present_max = max(present_max, max_ending_here)
            
        return present_max
