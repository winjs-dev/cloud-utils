/**
 * URLJoin
 *
 * @param {...string} args - URL segments to join
 * @returns {string} - The joined and normalized URL
 * @description
 * Joins all given URL segments together, then normalizes the resulting URL.
 *
 * Use String.prototype.join('/') to combine URL segments, then a series of String.prototype.replace() calls with various regexps to normalize the resulting URL (remove double slashes, add proper slashes for protocol, remove slashes before parameters, combine parameters with '&' and normalize first parameter delimiter).
 * @example
 *
 * URLJoin('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo');
 * // => 'http://www.google.com/a/b/cd?foo=123&bar=foo'
 */
export function URLJoin(...args: string[]): string {
  return args
    .join('/')
    .replace(/[\/]+/g, '/')
    .replace(/^(.+):\//, '$1://')
    .replace(/^file:/, 'file:/')
    .replace(/\/(\?|&|#[^!])/g, '$1')
    .replace(/\?/g, '&')
    .replace('&', '?');
}
