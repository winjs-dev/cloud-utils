/**
 * 是否为有效的16进制颜色
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidHexadecimalColor('#f00');
 * // => true
 *
 * isValidHexadecimalColor('#fe9de8');
 * // => true
 */
function isValidHexadecimalColor(val) {
  const reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

  return reg.test(val);
}

export default isValidHexadecimalColor;
