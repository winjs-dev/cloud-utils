/**
 * 是否是QQ客户端webview内核
 *
 * @returns {boolean}
 * @example
 *
 * inQQ();
 * // => false
 */
function inQQ () {
  if (typeof window.navigator === 'undefined') return false;

  const ua = window.navigator.userAgent.toLowerCase();

  return /qq\/\d/i.test(ua) && ua.indexOf('qqtheme') > -1;
}

export default inQQ;
