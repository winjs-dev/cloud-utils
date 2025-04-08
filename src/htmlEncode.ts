/**
 * html字符编码
 *
 * @param {string} str - 需要编码的字符串
 * @returns {string} 编码后的字符串
 * @example
 *
 * htmlEncode('<script>');
 * // => &lt;script&gt;
 */
export function htmlEncode(str: string): string {
  if (typeof str === 'string' && str.length === 0) return '';

  let s = str.replace(/&/g, '&amp;');

  return s.replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#39;')
        .replace(/ /g, '&nbsp;')
        .replace(/"/g, '&quot;')
        .replace(/\n/g, '<br>');
}