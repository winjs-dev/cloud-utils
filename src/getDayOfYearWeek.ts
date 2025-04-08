import { getDayOfYear } from './getDayOfYear';
/**
 * 获取某个日期在这一年的第几周
 *
 * @since 1.2.4
 * @param time - 日期字符串或Date对象
 * @returns 这一年的第几周
 * @example
 *
 * getDayOfYearWeek('2014-01-10')
 * // => 2
 *
 * @example
 * getDayOfYearWeek(new Date(2014, 0, 10))
 * // => 2
 */
export function getDayOfYearWeek(time: string | Date): number {
  const numDays = getDayOfYear(time);
  return Math.ceil(numDays / 7);
}