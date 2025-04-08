/**
 * 是否为有效的磁力链接(宽松匹配)
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidMagnetLinkLoose('magnet:?xt=urn:btih:40A89A6F4FB1498A98087109D012A9A851FBE0FC');
 * // => true
 */
export function isValidMagnetLinkLoose(val: string): boolean {
  const reg = /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/;

  return reg.test(val);
}
