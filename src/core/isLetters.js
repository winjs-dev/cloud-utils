/**
 * 是否为字母
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isLetters('1234');
 * // => false
 */
function isLetters(val) {
  const reg = /^[a-z]+$/i;

  return reg.test(val);
}

export default isLetters;
