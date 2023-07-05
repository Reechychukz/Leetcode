/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    let seen = new Set();
    let count = 0;
    
    for (let i = 0; i < 9; i++) {        
        for (let j = 0; j < 9; j++) {
            let currentVal = board[i][j];            
            if (board[i][j] !== ".") {
                count++;
                seen.add(board[i][j] + " found in row " + i);
                seen.add(board[i][j] + " found in column " + j);
                seen.add(board[i][j] + " found in sub box " + Math.floor(i / 3) + " - " + Math.floor(j / 3));
            }
        }
    }
    return seen.size === count * 3 ? true : false;
};