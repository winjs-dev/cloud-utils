/**
 * 判断字符串是否只包含字母（不区分大小写）
 * 支持大小写字母，但不支持空格、数字或特殊字符
 *
 * @param val - 要检查的字符串
 * @returns {boolean} 是否只包含字母
 * @example
 * 
 * isLetters('abc'); // => true
 * isLetters('ABC'); // => true
 * isLetters('aBc'); // => true
 * isLetters('123'); // => false
 * isLetters('abc123'); // => false
 * isLetters('abc def'); // => false
 * isLetters(''); // => false
 */
function isLetters(val: string): boolean {
  const reg = /^[a-z]+$/i;
  return reg.test(val);
}

export default isLetters; 