/**
 * 是否为闰年
 *
 * @param {number} val - 需要检查的年份
 * @returns {boolean} 是否为闰年
 * @example
 *
 * isLeapYear(2000);
 * // => true
 */
export function isLeapYear(val: number): boolean {
  if (typeof val !== 'number') throw new TypeError('数据类型必须是 number');

  if (val % 4 === 0 && val % 100 !== 0) {
    return true;
  } else {
    return val % 400 === 0;
  }
}