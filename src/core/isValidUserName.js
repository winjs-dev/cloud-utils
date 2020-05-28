/**
 * 是否为有效的用户名，4到16位（字母，数字，下划线，减号）
 *
 * @param {string} val
 * @param {number} minLength
 * @param {number} maxLength
 * @returns {boolean}
 * @example
 *
 * isValidUserName('xiaohua_qq');
 * // => true
 */
function isValidUserName(val, minLength = 4, maxLength = 16) {
  const reg = new RegExp(`^[a-zA-Z0-9_-]{${minLength},${maxLength}}$`);

  return reg.test(val);
}

export default isValidUserName;
