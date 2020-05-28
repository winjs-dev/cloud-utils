/**
 * 是否为有效的中文姓名
 *
 * @param val
 * @returns {boolean}
 * @example
 *
 * isValidChineseName('葛二蛋');
 * // => true
 *
 * isValidChineseName('凯文·杜兰特');
 * // => true
 *
 * isValidChineseName('德克·维尔纳·诺维茨基');
 * // => true
 */
function isValidChineseName(val) {
  const reg = /^(?:[\u4e00-\u9fa5·]{2,16})$/;

  return reg.test(val);
}

export default isValidChineseName;
