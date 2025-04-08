/**
 * 大写每个单词的首字母
 *
 * @since 1.2.1
 * @param str 输入字符串
 * @returns {string} 每个单词首字母大写的字符串
 * @example
 *
 * capitalizeEveryWord('hello world!');
 * // => 'Hello World!'
 */
export function capitalizeEveryWord(str: string): string {
  return str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
}