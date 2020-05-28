import getMonthOfDay from './getMonthOfDay';
/**
 * 获取某年有多少天
 *
 * @since 1.2.4
 * @param time
 * @returns {number}
 * @example
 *
 * getYearOfDay('2014')
 * => 365
 */
function getYearOfDay(time) {
  var firstDayYear = getFirstDayOfYear(time);
  var lastDayYear = getLastDayOfYear(time);
  var numSecond = (new Date(lastDayYear).getTime() - new Date(firstDayYear).getTime()) / 1000;
  return Math.ceil(numSecond / (24 * 3600));
}

// 获取某年的第一天
function getFirstDayOfYear(time) {
  var year = new Date(time).getFullYear();
  return year + '-01-01 00:00:00';
}

// 获取某年最后一天
function getLastDayOfYear(time) {
  var year = new Date(time).getFullYear();
  var dateString = year + '-12-01 00:00:00';
  var endDay = getMonthOfDay(dateString);
  return year + '-12-' + endDay + ' 23:59:59';
}

export default getYearOfDay;
