/**
 * 返回指定长度的月份集合
 * 摘自：https://segmentfault.com/a/1190000013041329
 *
 * @param  {time} 时间
 * @param  {len} 长度
 * @param  {direction} 方向：  1: 前几个月;  2: 后几个月;  3:前后几个月  默认 3
 * @return {Array} 数组
 * @example
 *
 * getMonths('2018-1-29', 6, 1)
 * // => ["2018-1", "2017-12", "2017-11", "2017-10", "2017-9", "2017-8", "2017-7"]
 */
/**
 * 获取两个日期之间的所有月份
 *
 * @param {Date} start - 开始时间
 * @param {Date} end - 结束时间
 * @returns {string[]} - 包含所有月份的数组，格式为'YYYY-M'
 * @example
 *
 * ```typescript
 * const months = getMonths(new Date('2018-1-29'), new Date('2018-9-29'));
 * console.log(months); // 输出: ['2018-1', '2018-2', '2018-3', '2018-4', '2018-5', '2018-6', '2018-7', '2018-8', '2018-9']
 * ```
 */
export function getMonths(start: Date, end: Date): string[] {
  const monthArr: string[] = [];
  const startYear = start.getFullYear();
  const endYear = end.getFullYear();
  const startMonth = start.getMonth() + 1;
  const endMonth = end.getMonth() + 1;

  if (startYear === endYear) {
    for (let i = startMonth; i <= endMonth; i++) {
      monthArr.push(`${startYear}-${i}`);
    }
  } else {
    for (let j = startMonth; j <= 12; j++) {
      monthArr.push(`${startYear}-${j}`);
    }
    for (let k = 1; k <= endMonth; k++) {
      monthArr.push(`${endYear}-${k}`);
    }
  }
  return monthArr;
}
