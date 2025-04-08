/**
 * 是否为有效的日期格式<br>
 * 格式为 yyyy-mm-dd 或 yyyy-mm-dd HH:mm:ss
 *
 * @param {string} val - 需要验证的日期字符串
 * @returns {boolean} - 返回验证结果
 * @example
 * isValidDate('2015-01-20');
 * // => true
 * @example
 * isValidDate('2015-01-20 12:34:56');
 * // => true
 */
export function isValidDate(val: string): boolean {
  const dateReg = /^\d{4}-\d{2}-\d{2}$/;
  const timeReg = /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/;

  return dateReg.test(val) || timeReg.test(val);
}
