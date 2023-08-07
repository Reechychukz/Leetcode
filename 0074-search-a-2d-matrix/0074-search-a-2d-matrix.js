/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let [l, r] = [0, matrix.length*matrix[0].length-1];
    while (l<=r) {
        let mid = parseInt(Math.floor((l+r)/2)); 
        let mid_col = mid%matrix[0].length;
        let mid_row = parseInt(Math.floor(mid/matrix[0].length));

        if (matrix[mid_row][mid_col] === target) return true;
        else if (matrix[mid_row][mid_col] < target) l = mid+1;
        else r = mid - 1;
    }

    return false;
    
};