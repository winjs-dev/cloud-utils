/**
 * 是否为 HTML 标签
 *
 * @since 1.2.4
 * @param {string} str - 需要检查的字符串
 * @returns {boolean} 是否为HTML标签
 * @example
 *
 * isHTML('<p>123</p>');
 * // => true
 */
export function isHTML(str: string): boolean {
  const reg = /<("[^"]*"|'[^']*'|[^'">])*>/;
  return reg.test(str);
}