/**
 * getMonthOfDay
 * @Author: liwb (lwbhtml@163.com)
 * @Date: 2025-04-08 09:41
 * @LastEditTime: 2025-04-08 09:41
 * @Description: getMonthOfDay
 */
/**
 * 获取某月有多少天
 * 摘自：https://segmentfault.com/a/1190000013041329
 *
 * @param {string} time 时间字符串
 * @return {number} 天数
 * @example
 *
 * getMonthOfDay('2018-1-29')
 * // => 31
 */
export function getMonthOfDay(time: string): number {
  const date = new Date(time);
  const year = date.getFullYear();
  const mouth = date.getMonth() + 1;
  let days: number;

  //当月份为二月时，根据闰年还是非闰年判断天数
  if (mouth == 2) {
    days = (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) || (year % 4 == 0 && year % 100 != 0) ? 28 : 29;
  } else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
    //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
    days = 31;
  } else {
    //其他月份，天数为：30.
    days = 30;
  }
  return days;
}
