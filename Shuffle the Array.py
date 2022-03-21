class Solution:
    def shuffle(self, nums: List[int], n: int) -> List[int]:
        x = nums[0:n]
        y = nums[n:]
        i = 0
        output = [] 
        
        for i in range(0, n):
            output.append(x[i])
            output.append(y[i])
        return output
