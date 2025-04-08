/**
 * 是否为有效的手机号，中国手机号(宽松), 只要是13,14,15,16,17,18,19开头即可
 *
 * @param {string} val - 需要检查的手机号码
 * @returns {boolean} 是否为有效的手机号
 * @example
 *
 * isMobile('15898745678');
 * // => true
 */
export function isMobile(val: string): boolean {
  const reg = /^[1][3456789]\d{9}$/;
  return reg.test(val);
}