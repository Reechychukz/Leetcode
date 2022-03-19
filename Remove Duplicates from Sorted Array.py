class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i=0
        while True:
            if i < len(nums) - 1 and nums[i] == nums[i+1]:
                nums.pop(i)
                continue
            i += 1
            if i == len(nums): 
                return i  #This returns the length of the remaining list after removing duplicates
