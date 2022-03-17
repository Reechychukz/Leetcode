class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Rule: Do not return anything, modify nums in-place instead.
        """
        k = k % len(nums)
        nums[:] = nums[::-1]
        nums[:] = nums[0:k][::-1] + nums[k:][::-1]
