/**
 * 大写每个单词的首字母
 *
 * @since 1.2.1
 * @param str
 * @returns {string|*|void|XML}
 * @example
 *
 * capitalizeEveryWord('hello world!');
 * // => 'Hello World!'
 */
function capitalizeEveryWord(str) {
  return str.replace(/\b[a-z]/g, (char) => char.toUpperCase());
}

export default capitalizeEveryWord;
