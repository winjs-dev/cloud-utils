/**
 * 是否是QQ浏览器内核
 *
 * @returns {boolean} 是否是QQ浏览器内核
 * @example
 *
 * inQQBrowser();
 * // => false
 */
export function inQQBrowser(): boolean | undefined {
  if (typeof window.navigator === 'undefined') return undefined;

  const ua = window.navigator.userAgent.toLowerCase();
  return ua.indexOf('mqqbrowser') !== -1;
}