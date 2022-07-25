class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        sum = []
        i = 1
        sum.append(nums[0])
        while i < len(nums): 
            sum.append(sum[i-1] + nums[i])
            i += 1
        return sum
