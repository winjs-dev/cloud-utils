/**
 * 是否为有效的微信号
 * 6至20位，以字母开头，字母，数字，减号，下划线
 * @param {string} val - 待验证的微信号
 * @returns {boolean} 是否为有效的微信号
 * @example
 * isValidWechatID('liwenbo_2010');
 * // => true
 */
export default function isValidWechatID(val: string): boolean {
  const reg = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/;
  return reg.test(val);
}