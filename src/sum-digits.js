/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let current = n;

  while (current > 0) {
    sum += current % 10;
    current = Math.floor(current / 10);
  }

  return sum > 9 ? getSumOfDigits(sum) : sum;
}

module.exports = {
  getSumOfDigits
};

