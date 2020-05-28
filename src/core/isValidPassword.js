/**
 * 是否为有效的密码强度，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
 *
 * @param {string} val
 * @param {number} minLength 最小位数
 * @returns {boolean}
 * @example
 *
 * isValidPassword('Kd@curry666');
 * // => true
 */
function isValidPassword(val, minLength = 6) {
  const reg = new RegExp(`^.*(?=.{${minLength},})(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$`);

  return reg.test(val);
}

export default isValidPassword;
