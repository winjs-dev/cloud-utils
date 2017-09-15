/**
 * 是否为有效的邮政编码
 *
 * @param val
 * @returns {boolean}
 * @example
 *
 * isValidZipcode('330561');
 * // => true
 */
function isValidZipcode(val) {
  const reg = /^\d{6}$/;

  return reg.test(val);
}

export default isValidZipcode;
