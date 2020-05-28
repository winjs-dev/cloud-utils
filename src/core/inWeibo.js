/**
 * 是否是微博内核
 *
 * @returns {boolean}
 * @example
 *
 * inWeibo();
 * // => false
 */
function inWeibo() {
  if (typeof navigator === 'undefined') return;

  const ua = navigator.userAgent.toLowerCase();

  return ua.indexOf('weibo') !== -1;
}

export default inWeibo;
