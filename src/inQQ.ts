/**
 * 是否是QQ客户端webview内核
 *
 * @returns {boolean} 是否是QQ客户端webview内核
 * @example
 *
 * inQQ();
 * // => false
 */
export function inQQ(): boolean {
  if (typeof window.navigator === 'undefined') return false;

  const ua = window.navigator.userAgent.toLowerCase();
  return /qq\/\d/i.test(ua) && ua.indexOf('qqtheme') > -1;
}