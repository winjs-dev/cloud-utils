/**
 * 是否是支付宝内核
 *
 * @returns {boolean}
 * @example
 *
 * inAlipay();
 * // => false
 */
function inAlipay() {
  if (typeof navigator === 'undefined') return;

  var ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('alipayclient') !== -1;
}

export default inAlipay;
