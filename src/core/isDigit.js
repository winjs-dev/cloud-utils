/**
 * 是否为数字
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isDigit('abc');
 * // => false
 */
function isDigit(val) {
  var reg = /^-?\d+\.?\d*$/;

  return reg.test(val);
}

export default isDigit;
