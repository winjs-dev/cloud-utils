/**
 * 是否是微信内核
 *
 * @returns {boolean}
 * @example
 *
 * inAlipay();
 * // => false
 */
function inWeixin() {
  if (typeof navigator === 'undefined') return;

  var ua = navigator.userAgent.toLowerCase();

  return ua.indexOf('micromessenger') !== -1;
}

export default inWeixin;
