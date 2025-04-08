/**
 * 是否是微博内核
 *
 * @returns 当前环境是否为微博内核
 * @example
 *
 * inWeibo();
 * // => false
 */
export function inWeibo(): boolean {
  if (typeof navigator === 'undefined') return false;

  const ua = navigator.userAgent.toLowerCase();

  return ua.includes('weibo');
}