const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  function removeDuplicates(s1) {
    return s1 += s1.filter((a, b) => s1.indexOf(a) === b)
  };
  function removeDuplicates(s2) {
    return s2 += s2.filter((a, b) => s2.indexOf(a) === b)
  };
  let amount = 0;
  for(let i = 0; i < s1.length; i++) {
    for(let j = 0; j < s2.length; j++){
      if (s1[j] === s2[j]) amount++; 
      break
    }
  }
  return amount
}


module.exports = {
  getCommonCharacterCount
};
