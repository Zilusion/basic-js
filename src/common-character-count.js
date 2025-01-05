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
  map1 = new Map();
  for (let i = 0; i < s1.length; i++) {
    if (map1.has(s1[i])) {
      map1.set(s1[i], map1.get(s1[i]) + 1);
    } else {
      map1.set(s1[i], 1);
    }
  }
  map2 = new Map();
  for (let i = 0; i < s2.length; i++) {
    if (map2.has(s2[i])) {
      map2.set(s2[i], map2.get(s2[i]) + 1);
    } else {
      map2.set(s2[i], 1);
    }
  }

  console.log(map1);
  console.log(map2);

  let count = 0;
  for (const [key, value] of map1) {
    if (map2.has(key)) {
      count += Math.min(value, map2.get(key));
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
