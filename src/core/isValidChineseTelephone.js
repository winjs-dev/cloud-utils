/**
 * 是否为有效的国内座机电话
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isTelephone('0571-4211236');
 * // => true
 *
 * isTelephone('0341-86091234');
 * // => true
 */
function isValidChineseTelephone(val) {
  const reg = /\d{3}-\d{8}|\d{4}-\d{7}/;

  return reg.test(val);
}

export default isValidChineseTelephone;
