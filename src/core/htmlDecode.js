/**
 * html字符解码
 *
 * @param {string} str
 * @returns {string}
 * @example
 *
 * htmlDecode('&lt;script&gt;');
 * // => <script>
 */
function htmlDecode(str) {
  if (typeof str === 'string' && str.length === 0) return;

  let s = str.replace(/&amp;/g, '&');

  return s.replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&#39;/g, '\'')
        .replace(/&nbsp;/g, ' ')
        .replace(/&quot;/g, '"')
        .replace(/<br>/g, '\\n');
}

export default htmlDecode;
