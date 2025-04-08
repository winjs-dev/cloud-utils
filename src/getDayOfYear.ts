/**
 * 获取某个日期是当年中的第几天
 * 
 * @since 1.2.4
 * @param {string | Date} time - 日期字符串或Date对象
 * @returns {number} 当年中的第几天
 * @example
 *
 * getDayOfYear('2014-01-10')
 * // => 10
 *
 * getDayOfYear(new Date(2014, 0, 10))
 * // => 10
 */
export function getDayOfYear(time: string | Date): number {
  const firstDayYear = getFirstDayOfYear(time);
  const numSecond = (new Date(time).getTime() - new Date(firstDayYear).getTime()) / 1000;
  return Math.ceil(numSecond / (24 * 3600));
}

/**
 * 获取某年的第一天
 * @private
 */
function getFirstDayOfYear(time: string | Date): string {
  const year = new Date(time).getFullYear();
  return `${year}-01-01 00:00:00`;
}