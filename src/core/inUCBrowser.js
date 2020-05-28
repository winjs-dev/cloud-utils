/**
 * 是否是UC浏览器内核
 *
 * @returns {boolean}
 * @example
 *
 * inUCBrowser();
 * // => false
 */
function inUCBrowser() {
  if (typeof window.navigator === 'undefined') return;

  const ua = window.navigator.userAgent.toLowerCase();

  return ua.indexOf('ucbrowser') !== -1;
}

export default inUCBrowser;
