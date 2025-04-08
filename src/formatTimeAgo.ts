/**
 * 将时间转化为几天前,几小时前，几分钟前
 * 
 * @param {number} ms - 时间戳(毫秒)
 * @returns {string} 格式化后的时间字符串
 * @example
 *
 * formatTimeAgo(Date.now() - 3600000);
 * // => '1小时前'
 *
 * formatTimeAgo(Date.now() - 86400000);
 * // => '1天前'
 */
export function formatTimeAgo(ms: number): string {
  ms = parseInt(ms.toString());

  const timeNow = Date.now();
  const diff = (timeNow - ms) / 1000;
  const days = Math.floor(diff / (24 * 60 * 60));
  const hours = Math.floor(diff / (60 * 60));
  const minutes = Math.floor(diff / 60);
  const second = Math.floor(diff);

  if (days > 0 && days < 2) {
    return `${days}天前`;
  } else if (days <= 0 && hours > 0) {
    return `${hours}小时前`;
  } else if (hours <= 0 && minutes > 0) {
    return `${minutes}分钟前`;
  } else if (minutes <= 0 && second >= 0) {
    return '刚刚';
  } else {
    return new Date(ms).toLocaleString();
  }
}