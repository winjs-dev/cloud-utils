/**
 * 是否为有效的16进制颜色
 * 
 * @param {string} val - 需要验证的颜色字符串
 * @returns {boolean} - 返回验证结果
 * @example
 * isValidHexadecimalColor('#f00');
 * // => true
 * @example
 * isValidHexadecimalColor('#fe9de8');
 * // => true
 */
function isValidHexadecimalColor(val: string): boolean {
  const reg = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

  return reg.test(val);
}

export default isValidHexadecimalColor;