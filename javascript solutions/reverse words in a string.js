/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = s => s.split(' ').map((word) => word.split('').reverse().join('')).join(' ');
