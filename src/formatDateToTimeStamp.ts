/**
 * 获取指定时间的Unix时间戳
 * @description 将各种格式的日期字符串转换为Unix时间戳(毫秒数)
 * @param {string} time - 时间字符串，支持格式：
 *   - 20160126 12:00:00
 *   - 2016-01-26 12:00:00
 *   - 2016.01.26 12:00:00
 *   - 20160126
 *   - 2016-01-26 12:00:00.0
 * @returns {number} Unix时间戳(毫秒数)
 * @throws {TypeError} 当输入参数不是字符串时抛出
 * @throws {Error} 当日期格式无效时抛出
 * @example
 * formatDateToTimeStamp('20160126 12:00:00');
 * // => 1453780800000
 */
export function formatDateToTimeStamp(time: string): number {
  if (typeof time !== 'string') throw new TypeError('参数必须是字符串类型');
  if (!time) throw new Error('日期字符串不能为空');

  // 处理带毫秒的格式
  let normalizedTime = time.length > 19 ? time.substring(0, 19) : time;

  // 统一替换分隔符为/
  normalizedTime = normalizedTime.replace(/[-.]/g, '/');

  // 处理无分隔符的格式(如20160126)
  if (!normalizedTime.includes('/') && normalizedTime.length >= 8) {
    normalizedTime = `${normalizedTime.slice(0, 4)}/${normalizedTime.slice(4, 6)}/${normalizedTime.slice(6)}`;
  }

  const timestamp = new Date(normalizedTime).getTime();
  if (isNaN(timestamp)) throw new Error('无效的日期格式');

  return timestamp;
}
