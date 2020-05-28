/**
 * 是否为有效的微信号
 * 6至20位，以字母开头，字母，数字，减号，下划线
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidWechatID('liwenbo_2010');
 * // => true
 */
function isValidWechatID(val) {
  const reg = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/;
  return reg.test(val);
}

export default isValidWechatID;
