/**
 * 是否为有效的日期，格式为yyyy-mm-dd
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidDate('2015-01-20');
 * // => true
 */
function isValidDate(val) {
  const reg = /^\d{4}-\d{2}-\d{2}$/;

  return reg.test(val);
}

export default isValidDate;
