/**
 * 是否为有效的手机号，中国手机号(宽松), 只要是13,14,15,16,17,18,19开头即可
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isMobile('15898745678');
 * // => true
 */
function isMobile(val) {
  const reg = /^[1][3456789]\d{9}$/;

  return reg.test(val);
}

export default isMobile;
