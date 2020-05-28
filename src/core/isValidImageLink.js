/**
 * 是否为有效的图片链接地址（图片格式可按需增删）
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidImageLink('https://www.abc.com/logo.png');
 * // => true
 */
function isValidImageLink(val) {
  const reg = /^https?:\/\/.*?(?:gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)$/i;

  return reg.test(val);
}

export default isValidImageLink;
