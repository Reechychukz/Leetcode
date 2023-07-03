/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;

  // Check if s and goal are the same
  if (s === goal) {
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j < s.length; j++) {
        if (s[i] === s[j]) return true;
      }
    }
    return false;
  }

  // Find differing indices
  const diff = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) diff.push(i);
    if (diff.length > 2) return false;
  }

  // Check if swapping characters results in equal strings
  if (diff.length === 2) {
    const [i, j] = diff;
    return s[i] === goal[j] && s[j] === goal[i];
  }

  return false;
};