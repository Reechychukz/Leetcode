class Solution:
    def isPalindrome(self, x: int) -> bool:
        input = str(x)
        reversedInput = "".join(list(reversed(input))) 
        if input == reversedInput:
            return True
        else:
            return False
