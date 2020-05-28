/**
 * 是否为闰年
 *
 * @param {number} val
 * @returns {boolean}
 * @example
 *
 * isLeapYear(2000);
 * // => true
 */
function isLeapYear(val) {
  if (typeof val !== 'number') throw new TypeError('数据类型必须是 number');

  if (val % 4 === 0 && val % 100 !== 0) {
    return true;
  } else {
    return val % 400 === 0;
  }
}

export default isLeapYear;
