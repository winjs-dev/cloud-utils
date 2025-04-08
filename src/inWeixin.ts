/**
 * 是否是微信内核
 *
 * @returns 当前环境是否为微信内核
 * @example
 *
 * inWeixin();
 * // => false
 */
export function inWeixin(): boolean {
  if (typeof navigator === 'undefined') return false;

  const ua = navigator.userAgent.toLowerCase();

  return ua.includes('micromessenger');
}