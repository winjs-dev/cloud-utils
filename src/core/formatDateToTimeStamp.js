/**
 * 获取指定时间unix时间戳
 *
 * @param {string} time
 * @returns {number}
 * @example
 *
 * formatDateToTimeStamp('20160126 12:00:00');
 * // => 1453780800000
 *
 * formatDateToTimeStamp('2016-01-26 12:00:00');
 * // => 1453780800000
 *
 * formatDateToTimeStamp('2016.01.26 12:00:00');
 * // => 1453780800000
 *
 * formatDateToTimeStamp('20160126');
 * // => 1453737600000
 *
 * formatDateToTimeStamp('2016-01-26 12:00:00.0');
 * // => 1453780800000
 */
function formatDateToTimeStamp(time) {
  if (typeof time !== 'string') throw new Error('time数据类型必须是string');

  // 2016-05-23 13:58:02.0
  if (time.length > 19) {
    time = time.substring(0, 19);
  }

  var unixTime;
  var pattern = /-|\./g;
  var year;
  var month;
  var day;
  var reset;

  if (pattern.test(time)) {
    unixTime = time.replace(pattern, '/');
  } else {
    // 若无’-‘，则不处理
    if (!~time.indexOf('-')) {
      year = time.slice(0, 4);
      month = time.slice(4, 6);
      day = time.slice(6, 8);
      reset = time.slice(8);
      unixTime = year + '/' + month + '/' + day + reset;
    }
  }

  return Math.round(new Date(unixTime).getTime());
}

export default formatDateToTimeStamp;
