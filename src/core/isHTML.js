/**
 * 是否为 HTML 标签
 *
 * @since 1.2.4
 * @param {string} str
 * @returns {boolean}
 * @example
 *
 * isHTML('<p>123</p>');
 * // => true
 */
function isHTML(str) {
  var reg = /<("[^"]*"|'[^']*'|[^'">])*>/;

  return reg.test(str);
}

export default isHTML;
