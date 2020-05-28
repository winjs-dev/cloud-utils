/**
 * 是否为有效的英文姓名
 *
 * @param val
 * @returns {boolean}
 * @example
 *
 * isValidEnglishName('James');
 * // => true
 *
 * isValidEnglishName('Kevin Wayne Durant');
 * // => true
 *
 * isValidEnglishName('Dirk Nowitzki');
 * // => true
 */
function isValidEnglishName(val) {
  const reg = /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/;

  return reg.test(val);
}

export default isValidEnglishName;
