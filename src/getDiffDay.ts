/**
 * 得到两个时间的时间差（返回天数）
 *
 * @since 1.0.7
 * @param startDay - 开始时间戳
 * @param endDay - 结束时间戳
 * @returns 天数差
 * @example
 *
 * getDiffDay(1501516800000, 1504195200000);
 * // => 31
 *
 * @example
 * getDiffDay(Date.now(), Date.now() + 86400000);
 * // => 1
 */
export function getDiffDay(startDay: number, endDay: number): number {
  startDay = Number(startDay);
  endDay = Number(endDay);
  return Math.abs(endDay - startDay) / (24 * 1000 * 3600);
}