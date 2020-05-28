/**
 * 是否为有效的手机号，中国手机号(严谨), 根据工信部2019年最新公布的手机号段
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isMobileStrict('008618311006933');
 * // => true
 *
 * isMobileStrict('+8617888829981');
 * // => true
 *
 * isMobileStrict('19119255642');
 * // => true
 */
function isMobileStrict(val) {
  const reg = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;

  return reg.test(val);
}

export default isMobileStrict;
