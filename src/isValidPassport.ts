/**
 * 是否为有效的护照（包含香港、澳门）
 * @param {string} val - 需要验证的护照号码
 * @returns {boolean} 是否为有效的护照
 * @example
 * isValidPassport('s28233515');
 * // => true
 *
 * isValidPassport('141234567');
 * // => true
 *
 * isValidPassport('159203084');
 * // => true
 *
 * isValidPassport('MA1234567');
 * // => true
 *
 * isValidPassport('K25345719');
 * // => true
 */
export function isValidPassport(val: string): boolean {
  const reg = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/;

  return reg.test(val);
}
