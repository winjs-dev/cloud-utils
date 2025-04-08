/**
 * 是否为有效的英文姓名
 *
 * @param {string} val - 需要验证的英文姓名
 * @returns {boolean} - 返回验证结果
 * @example
 * isValidEnglishName('James');
 * // => true
 * @example
 * isValidEnglishName('Kevin Wayne Durant');
 * // => true
 * @example
 * isValidEnglishName('Dirk Nowitzki');
 * // => true
 */
export function isValidEnglishName(val: string): boolean {
  const reg = /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/;

  return reg.test(val);
}
