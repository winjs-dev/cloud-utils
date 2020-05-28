/**
 * 是否是微信内核
 *
 * @returns {boolean}
 * @example
 *
 * inWeixin();
 * // => false
 */
function inWeixin() {
  if (typeof navigator === 'undefined') return;

  const ua = navigator.userAgent.toLowerCase();

  return ua.indexOf('micromessenger') !== -1;
}

export default inWeixin;
