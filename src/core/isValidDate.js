/**
 * 是否为有效的日期格式<br>
 * 格式为 yyyy-mm-dd 或 yyyy-mm-dd HH:mm:ss
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidDate('2015-01-20');
 * // => true
 */
function isValidDate(val) {
  const dateReg = /^\d{4}-\d{2}-\d{2}$/;
  const timeReg = /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/;

  return dateReg.test(val) || timeReg.test(val);
}

export default isValidDate;
