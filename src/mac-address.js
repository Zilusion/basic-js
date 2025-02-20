const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const parts = n.split('-');

  if (parts.length !== 6) {
    return false;
  }

  for (const part of parts) {
    if (!isHex(part)) {
      return false;
    }
  }

  function isHex(str) {
    const regEx = /^[0-9A-F]{2}$/i;
    return regEx.test(str);
  }

  return true;
}
module.exports = {
  isMAC48Address
};
