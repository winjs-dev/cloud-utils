/**
 * 是否是QQ浏览器内核
 *
 * @returns {boolean}
 * @example
 *
 * inQQBrowser();
 * // => false
 */
function inQQBrowser() {
  if (typeof window.navigator === 'undefined') return;

  const ua = window.navigator.userAgent.toLowerCase();

  return ua.indexOf('mqqbrowser') !== -1;
}

export default inQQBrowser;
