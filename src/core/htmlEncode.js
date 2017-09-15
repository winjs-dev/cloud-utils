/**
 * html字符编码
 *
 * @param {string} str
 * @returns {string}
 * @example
 *
 * htmlEncode('<script>');
 * // => &lt;script&gt;
 */
function htmlEncode(str) {
  if (typeof str === 'string' && str.length === 0) return;

  let s = str.replace(/&/g, '&amp;');

  return s.replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\'/g, '&#39;')
        .replace(/ /g, '&nbsp;')
        .replace(/\"/g, '&quot;')
        .replace(/\n/g, '<br>');
}

export default htmlEncode;
