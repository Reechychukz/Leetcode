/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
    for(let i = matrix.length - 1; i >= 0; i--){
        for(let j = 0; j < matrix.length; j++){
            matrix[j].push(matrix[i][0])
            matrix[i].shift()
        }
   }
    return matrix
};
