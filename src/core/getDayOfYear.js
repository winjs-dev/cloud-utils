/**
 * 获取某个日期是当年中的第几天
 *
 * @since 1.2.4
 * @param time
 * @returns {number}
 * @example
 *
 * getDayOfYear('2014-01-10')
 * => 10
 */
function getDayOfYear(time) {
  var firstDayYear = getFirstDayOfYear(time);
  var numSecond = (new Date(time).getTime() - new Date(firstDayYear).getTime()) / 1000;
  return Math.ceil(numSecond / (24 * 3600));
}

// 获取某年的第一天
function getFirstDayOfYear(time) {
  var year = new Date(time).getFullYear();
  return year + '-01-01 00:00:00';
}

export default getDayOfYear;
