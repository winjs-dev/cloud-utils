/**
 * 是否为有效的统一社会信用代码
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isUnifiedSocialCreditCode('91230184MA1BUFLT44');
 * // => true
 *
 * isUnifiedSocialCreditCode('92371000MA3MXH0E3W');
 * // => true
 */
function isUnifiedSocialCreditCode(val) {
  const reg = /[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/;

  return reg.test(val);
}

export default isUnifiedSocialCreditCode;
