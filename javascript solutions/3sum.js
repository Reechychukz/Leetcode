/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    nums = nums.sort( (a,b) => a-b );
    
    let result = [];
    let sum=0;
    
    for(let i=0; i<nums.length; i++ ){
        
        let a = nums[i];
        
        if( i>0 && a==nums[i-1] ) 
            continue;
        
        

        let right = nums.length-1;
        let left = i+1;

        while(left<right) {

            sum = a + nums[left] + nums[right];

            if(sum > 0 )
                right--;
            
            else if(sum < 0 ) 
                left++
                
            else {
                
                result.push([a, nums[left], nums[right]]);
                
                left++;
                while(nums[left] == nums[left-1] && left<right)
                    left++;
                
            }

        }
        
    }
    return result;

};
