/**
 * 是否为有效的密码强度，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
 * @param {string} val - 需要验证的密码字符串
 * @param {number} [minLength=6] - 密码最小长度，默认为6
 * @returns {boolean} 是否为有效的密码
 * @example
 * isValidPassword('Kd@curry666');
 * // => true
 */
function isValidPassword(val: string, minLength: number = 6): boolean {
  const reg = new RegExp(`^.*(?=.{${minLength},})(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$`);

  return reg.test(val);
}

export default isValidPassword;