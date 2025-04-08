/**
 * 是否是UC浏览器内核
 *
 * @returns {boolean} 是否是UC浏览器内核
 * @example
 *
 * inUCBrowser();
 * // => false
 */
export function inUCBrowser(): boolean | undefined {
  if (typeof window.navigator === 'undefined') return undefined;

  const ua = window.navigator.userAgent.toLowerCase();
  return ua.indexOf('ucbrowser') !== -1;
}