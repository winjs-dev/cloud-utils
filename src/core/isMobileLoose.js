/**
 * 是否为有效的手机号，中国手机号(最宽松), 只要是1开头即可, 如果你的手机号是用来接收短信, 优先建议选择这一条
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isMobileLoose('008618311006933');
 * // => true
 *
 * isMobileLoose('+8617888829981');
 * // => true
 *
 * isMobileLoose('19119255642');
 * // => true
 */
function isMobileLoose(val) {
  const reg = /^(?:(?:\+|00)86)?1\d{10}$/;

  return reg.test(val);
}

export default isMobileLoose;
