/**
 * 是否为有效的身份证号,支持1/2代(15位/18位数字)
 *
 * @param val - 需要验证的身份证号字符串
 * @returns 是否为有效的身份证号
 * @example
 *
 * isCardId('411423198807127834');
 * // => true
 */
export function isCardId(val: string): boolean {
  const reg = /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/;

  return reg.test(val);
}