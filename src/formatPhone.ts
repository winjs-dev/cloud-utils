/**
 * 手机号码中间部分替换成指定符号
 *
 * @param phone - 手机号码字符串
 * @param symbol - 替换符号，默认为'****'
 * @returns 格式化后的手机号码字符串
 * @example
 *
 * formatPhone('15858264903');
 * // => '158****4903'
 *
 * formatPhone('15858264903', '####');
 * // => '158####4903'
 */
export function formatPhone(phone: string, symbol: string = '****'): string {
  if (typeof phone !== 'string') throw new TypeError('数据类型必须是 string');

  return phone.replace(/(\d{3})\d{4}(\d{4})/, `$1${symbol}$2`);
}