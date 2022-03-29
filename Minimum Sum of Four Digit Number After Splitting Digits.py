class Solution:
    def minimumSum(self, num: int) -> int:
        x = sorted(str(num))
        return (int(x[0])+int(x[1]))*10+int(x[2])+int(x[3])
		
