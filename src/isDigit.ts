/**
 * 判断字符串是否为数字（包括整数和小数）
 * 支持正数和负数，支持小数点
 *
 * @param val - 要检查的字符串
 * @returns {boolean} 是否为数字
 * @example
 * 
 * isDigit('123'); // => true
 * isDigit('-123'); // => true
 * isDigit('123.45'); // => true
 * isDigit('-123.45'); // => true
 * isDigit('abc'); // => false
 * isDigit('12.34.56'); // => false
 * isDigit(''); // => false
 */
function isDigit(val: string): boolean {
  const reg = /^-?\d+\.?\d*$/;
  return reg.test(val);
}

export default isDigit; 