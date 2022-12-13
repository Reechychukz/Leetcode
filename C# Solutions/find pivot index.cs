public class Solution {
    public int PivotIndex(int[] nums) {
        int rightSum = nums.Sum();
        int leftSum = 0;
        for(int pivotIndex = 0; pivotIndex < nums.Length; pivotIndex++){
            if (pivotIndex == 0) leftSum = 0;
            else
               leftSum += nums[pivotIndex - 1];
            
            rightSum -= nums[pivotIndex];
            
            if(rightSum == leftSum) 
                return pivotIndex;
        }
        return -1;
    }
}
