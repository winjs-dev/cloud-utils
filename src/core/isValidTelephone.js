/**
 * 是否为有效的电话(座机)
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isTelephone('0571-4211236');
 * // => true
 */
function isValidTelephone(val) {
  const reg = /^0\d{2,3}-\d{7,8}$/;

  return reg.test(val);
}

export default isValidTelephone;
