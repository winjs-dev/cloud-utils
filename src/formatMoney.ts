/**
 * 用符号（默认为逗号）格式化金钱
 *
 * @param val - 金额字符串
 * @param symbol - 分隔符号，默认为','
 * @returns 格式化后的金额字符串
 * @example
 *
 * formatMoney('1234567890');
 * // => '1,234,567,890'
 *
 * formatMoney('1234567890', ' ');
 * // => '1 234 567 890'
 */
export function formatMoney(val: string, symbol: string = ','): string {
  if (typeof val !== 'string') throw new TypeError('数据类型必须是 string');

  return val.replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
}