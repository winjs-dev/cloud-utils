/**
 * 是否为有效的md5格式(32位)
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidMD5('21fe181c5bfc16306a6828c1f7b762e8');
 * // => true
 */
function isValidMD5(val) {
  const reg = /^[a-f0-9]{32}$/;

  return reg.test(val);
}

export default isValidMD5;
