/**
 * 是否为有效的密码(6-16位字母加数字组合，不能包含空格)
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidPassword('a23456abc');
 * // => true
 */
function isValidPassword(val) {
  const reg = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,16}$/;

  return reg.test(val);
}

export default isValidPassword;
