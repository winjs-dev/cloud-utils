/**
 * 是否为有效的A股代码
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidAShareCode('sz000858');
 * // => true
 *
 * isValidAShareCode('SZ002136');
 * // => true
 *
 * isValidAShareCode('SH600600');
 * // => true
 *
 * isValidAShareCode('sh600600');
 * // => true
 */
function isValidAShareCode(val) {
  const reg = /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/;

  return reg.test(val);
}

export default isValidAShareCode;
