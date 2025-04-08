/**
 * Date 转化为指定格式的String
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)可以用 1-2 个占位符
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *
 * @param date - 日期，支持字符串或数字形式：20160126 12:00:00，2016-01-26 12:00:00，2016.01.26 12:00:00，20160126，2016-01-26 12:00:00.0
 * @param fmt - 格式化字符串
 * @returns 格式化后的日期字符串
 * @example
 *
 * formatDate(Date.now(), 'yyyy-MM-dd hh:mm:ss.S');
 * // => '2006-07-02 08:09:04.423'
 *
 * formatDate(Date.now(), 'yyyy-MM-dd E HH:mm:ss');
 * // => '2009-03-10 二 20:09:04'
 *
 * formatDate(Date.now(), 'yyyy-MM-dd EE hh:mm:ss');
 * // => '2009-03-10 周二 08:09:04'
 *
 * formatDate(Date.now(), 'yyyy-MM-dd EEE hh:mm:ss');
 * // => '2009-03-10 星期二 08:09:04'
 *
 * formatDate(Date.now(), 'yyyy-M-d h:m:s.S')
 * // => '2006-7-2 8:9:4.18'
 */
export function formatDate(date: string | number | Date = Date.now(), fmt: string = 'yyyy-MM-dd HH:mm:ss'): string {
  if (typeof date === 'string' && date.length) {
    date = new Date(formatTimeByPattern(date));
  } else if (typeof date === 'number' && !isNaN(date)) {
    date = new Date(date);
  } else if (date instanceof Date) {
    // do nothing
  } else {
    // 空字符串，NaN
    date = new Date();
  }
  
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 === 0 ? 12 : date.getHours() % 12, // 小时
    'H+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  };
  
  const week = {
    '0': '日',
    '1': '一',
    '2': '二',
    '3': '三',
    '4': '四',
    '5': '五',
    '6': '六'
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '星期' : '周') : '') + week[date.getDay() + '']);
  }

  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
  }

  return fmt;
}

/**
 * 将日期字符串转换为/连接的格式
 * @private
 */
function formatTimeByPattern(val: string): string {
  // 2016-05-23 13:58:02.0
  if (val.length > 19) {
    val = val.substring(0, 19);
  }

  const pattern = /-|\./g;
  let year;
  let month;
  let day;
  let reset;

  if (pattern.test(val)) {
    return val.replace(pattern, '/');
  } else {
    // 若无'-'，则不处理
    if (!val.includes('-')) {
      year = val.slice(0, 4);
      month = val.slice(4, 6);
      day = val.slice(6, 8);
      reset = val.slice(8);
      return `${year}/${month}/${day}${reset}`;
    }
    return val;
  }
}