/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;    
    let len = m + n;
    let pointerM = 0;
    let pointerN = 0;
    let tracker = [];
    
    let isEven = true;
    
    if (len % 2 !== 0) isEven = false;
    
    while(pointerM < m || pointerN < n) { 
        if(pointerM == m) {
            tracker.push(nums2[pointerN])
            pointerN++;
            continue;
        }
        if(pointerN == n) {
            tracker.push(nums1[pointerM])
            pointerM++;
            continue;
        }
        if(nums1[pointerM] === nums2[pointerN]) {
            tracker.push(nums1[pointerM], nums2[pointerN])
            pointerM++;
            pointerN++;
        } 
        else if(nums1[pointerM] > nums2[pointerN]) {
            tracker.push(nums2[pointerN]);
            pointerN++;
        } else {
            tracker.push(nums1[pointerM]);
            pointerM++;
        }  
    }
    let lenT = tracker.length;
    console.log(tracker)
    if(isEven) {
            return (tracker[lenT / 2] +  tracker[(lenT / 2) - 1]) / 2;
        } else return tracker[Math.floor(lenT / 2)];
};
