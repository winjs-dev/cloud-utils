import { getMonthOfDay } from './getMonthOfDay';

/**
 * 获取某年有多少天
 * @since 1.2.4
 * @param {string|Date} time - 年份字符串或Date对象
 * @returns {number} 返回该年的天数
 * @throws {TypeError} 当time参数不是字符串或Date对象时抛出
 * @example
 *
 * getYearOfDay('2014');
 * // => 365
 *
 * getYearOfDay(new Date('2020-01-01'));
 * // => 366
 *
 * getYearOfDay('2024');
 * // => 366
 */
export function getYearOfDay(time: string | Date): number {
  const firstDayYear = getFirstDayOfYear(time);
  const lastDayYear = getLastDayOfYear(time);
  const numSecond = (new Date(lastDayYear).getTime() - new Date(firstDayYear).getTime()) / 1000;
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

/**
 * 获取某年最后一天
 * @private
 */
function getLastDayOfYear(time: string | Date): string {
  const year = new Date(time).getFullYear();
  const dateString = `${year}-12-01 00:00:00`;
  const endDay = getMonthOfDay(new Date(dateString).getFullYear(), 12);
  return `${year}-12-${endDay} 23:59:59`;
}