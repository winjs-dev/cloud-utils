/**
 * 是否是支付宝内核
 *
 * @returns {boolean} 是否是支付宝内核
 * @example
 *
 * inAlipay();
 * // => false
 */
export function inAlipay(): boolean | undefined {
  if (typeof navigator === 'undefined') return undefined;

  const ua = navigator.userAgent.toLowerCase();
  return ua.indexOf('alipayclient') !== -1;
}