/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    const moves = [
    [-1, -2], [-2, -1], [-2, 1], [-1, 2],
    [1, -2], [2, -1], [2, 1], [1, 2]
  ];
  const dp = new Array(n).fill(null)
    .map(() => new Array(n).fill(null)
      .map(() => new Array(k + 1).fill(null)));
  function isOnBoard(x, y) {
    return x >= 0 && x < n && y >= 0 && y < n;
  }
  function findProbability(x, y, steps) {
    if (!isOnBoard(x, y)) return 0;
    if (steps === 0) return 1;
    if (dp[x][y][steps] !== null) return dp[x][y][steps];
    let probability = 0;
    for (const [dx, dy] of moves) {
      probability += 0.125 * findProbability(x + dx, y + dy, steps - 1);
    }
    dp[x][y][steps] = probability;
    return probability;
  }
  return findProbability(row, column, k);
};