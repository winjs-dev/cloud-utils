/**
 * 得到两个时间的时间差（返回天数）
 *
 * @since 1.0.7
 * @param {number} startDay 开始时间戳
 * @param {number} endDay   结束时间戳
 * @returns {number}
 * @example
 *
 * getDiffDay(1501516800000, 1504195200000);
 * // => 31
 */
function getDiffDay(startDay, endDay) {
  startDay = Number(startDay);
  endDay = Number(endDay);
  return Math.abs(endDay - startDay) / (24 * 1000 * 3600);
}

export default getDiffDay;
