/**
 * 检查是否为特殊字符
 * @param {string} value 需要检查的字符串
 * @returns {boolean} 是否为特殊字符
 * @example
 * isSpecialChar('abc');
 * // => false
 *
 * isSpecialChar('abc@');
 * // => true
 */
export function isSpecialChar(value: string): boolean {
  const regEn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]\s]/im;
  const regCn = /[·！#￥（——）：；“”‘、，|《。》？、【】[\]\s]/im;

  return regEn.test(value) || regCn.test(value);
}
