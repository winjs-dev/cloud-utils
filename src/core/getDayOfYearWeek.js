import getDayOfYear from './getDayOfYear';
/**
 * 获取某个日期在这一年的第几周
 *
 * @since 1.2.4
 * @param time
 * @returns {number}
 * @example
 *
 * getDayOfYearWeek('2014-01-10')
 * => 2
 */
function getDayOfYearWeek(time) {
  var numDays = getDayOfYear(time);
  return Math.ceil(numDays / 7);
}

export default getDayOfYearWeek;
