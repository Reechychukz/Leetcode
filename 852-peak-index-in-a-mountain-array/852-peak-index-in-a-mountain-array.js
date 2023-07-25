/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let l = 0,
        mid,
        r = arr.length - 1;
    
    while (l < r) {
        mid = Math.floor((l + r) / 2);
        
        if (arr[mid] < arr[mid + 1]) l = mid + 1;
        else r = mid;
    }
    return l;
};