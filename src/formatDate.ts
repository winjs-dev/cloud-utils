/**
 * 将Date对象或时间戳转换为指定格式的字符串
 * @description 支持多种日期格式输出，包括年月日时分秒、季度、星期等
 * @param {Date|number|string} [date=Date.now()] - 日期对象、时间戳或日期字符串
 * @param {string} [fmt='yyyy-MM-dd HH:mm:ss'] - 格式化字符串：
 *   - y: 年(1-4位)
 *   - M: 月(1-2位)
 *   - d: 日(1-2位)
 *   - h: 12小时制(1-2位)
 *   - H: 24小时制(1-2位)
 *   - m: 分钟(1-2位)
 *   - s: 秒(1-2位)
 *   - q: 季度(1位)
 *   - S: 毫秒(1-3位)
 *   - E: 星期(1-3位)
 * @returns {string} 格式化后的日期字符串
 * @throws {Error} 当日期参数无效时抛出
 * @example
 * formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss');
 * // => '2023-06-15 14:30:45'
 */
export function formatDate(date: Date | number | string = Date.now(), fmt: string = 'yyyy-MM-dd HH:mm:ss'): string {
  let dateObj: Date;

  if (typeof date === 'string' && date.length) {
    dateObj = new Date(formatTimeByPattern(date));
  } else if (typeof date === 'number' && !isNaN(date)) {
    dateObj = new Date(date);
  } else if (date instanceof Date) {
    dateObj = date;
  } else {
    dateObj = new Date();
  }

  if (isNaN(dateObj.getTime())) {
    throw new Error('无效的日期参数');
  }

  const o: Record<string, number> = {
    'M+': dateObj.getMonth() + 1, // 月份
    'd+': dateObj.getDate(), // 日
    'h+': dateObj.getHours() % 12 === 0 ? 12 : dateObj.getHours() % 12, // 小时
    'H+': dateObj.getHours(), // 小时
    'm+': dateObj.getMinutes(), // 分
    's+': dateObj.getSeconds(), // 秒
    'q+': Math.floor((dateObj.getMonth() + 3) / 3), // 季度
    'S': dateObj.getMilliseconds() // 毫秒
  };

  const week: Record<string, string> = {
    '0': '日',
    '1': '一',
    '2': '二',
    '3': '三',
    '4': '四',
    '5': '五',
    '6': '六'
  };

  let matchResult: RegExpMatchArray | null;
  if ((matchResult = /(y+)/.exec(fmt))) {
    fmt = fmt.replace(matchResult[0], (dateObj.getFullYear() + '').substring(4 - matchResult[1].length));
  }

  if ((matchResult = /(E+)/.exec(fmt))) {
    const dayKey = dateObj.getDay().toString() as keyof typeof week;
    const prefix = matchResult[1].length > 1 ?
      (matchResult[1].length > 2 ? '星期' : '周') : '';
    fmt = fmt.replace(matchResult[0], prefix + week[dayKey]);
  }

  for (const k in o) {
    const pattern = new RegExp(`(${k})`);
    if ((matchResult = pattern.exec(fmt))) {
      const value = o[k];
      const replacement = matchResult[1].length === 1 ?
        value.toString() :
        ('00' + value).substring(('' + value).length);
      fmt = fmt.replace(matchResult[0], replacement);
    }
  }

  return fmt;
}

/**
 * 将日期字符串统一转换为/分隔的格式
 * @private
 * @param {string} val - 日期字符串
 * @returns {string} 格式化后的日期字符串
 */
function formatTimeByPattern(val: string): string {
  if (val.length > 19) {
    val = val.substring(0, 19);
  }

  if (/[-.]/.test(val)) {
    return val.replace(/[-.]/g, '/');
  }

  if (val.length >= 8 && !val.includes('-')) {
    return `${val.slice(0, 4)}/${val.slice(4, 6)}/${val.slice(6)}`;
  }

  return val;
}
