/**
 * html字符解码
 *
 * @param {string} str - 需要解码的字符串
 * @returns {string} 解码后的字符串
 * @example
 *
 * htmlDecode('&lt;script&gt;');
 * // => <script>
 */
export function htmlDecode(str: string): string {
  if (typeof str === 'string' && str.length === 0) return '';

  let s = str.replace(/&amp;/g, '&');

  return s.replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .replace(/&quot;/g, '"')
        .replace(/<br>/g, '\n');
}