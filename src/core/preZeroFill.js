/**
 * 对整数进行前置补0
 *
 * @param {number} num 数值
 * @param {number} size 要补0的位数
 * @returns {string}
 * @example
 *
 * preZeroFill(12, 3);
 * // => 012
 */
function preZeroFill(num, size) {
  if (num >= Math.pow(10, size)) {
    return num.toString();
  } else {
    var _str = Array(size + 1).join('0') + num;
    return _str.slice(_str.length - size);
  }
}

export default preZeroFill;
