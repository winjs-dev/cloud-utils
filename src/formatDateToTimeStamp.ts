/**
 * 获取指定时间unix时间戳
 *
 * @param time - 时间字符串，支持格式：20160126 12:00:00，2016-01-26 12:00:00，2016.01.26 12:00:00，20160126，2016-01-26 12:00:00.0
 * @returns unix时间戳
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
export function formatDateToTimeStamp(time: string): number {
  if (typeof time !== 'string') throw new TypeError('数据类型必须是 string');

  // 2016-05-23 13:58:02.0
  if (time.length > 19) {
    time = time.substring(0, 19);
  }

  let unixTime: string;
  const pattern = /-|\./g;
  let year: string;
  let month: string;
  let day: string;
  let reset: string;

  if (pattern.test(time)) {
    unixTime = time.replace(pattern, '/');
  } else {
    // 若无'-'，则不处理
    if (!time.includes('-')) {
      year = time.slice(0, 4);
      month = time.slice(4, 6);
      day = time.slice(6, 8);
      reset = time.slice(8);
      unixTime = `${year}/${month}/${day}${reset}`;
    }
  }

  return Math.round(new Date(unixTime).getTime());
}