/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) return 0;    //checking if array is empty make sure return 0.

    intervals.sort((a, b) => a[1] - b[1]);  //sort the array in order to find the overlapping item
    let endInterval = intervals[0][1];   
    console.log("hey",endInterval)
      let res = 0;    
    for (let i = 1; i < intervals.length; i++) {
        const [start2, end2] = intervals[i];       
        if (endInterval <= start2) { 
            endInterval = end2;
        } else { 
            res++;
            endInterval = Math.min(end2, endInterval);
        } 
    }
    return res;
};