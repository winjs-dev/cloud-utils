/**
 * 是否为有效的视频链接地址（视频格式可按需增删）
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidVideoLink('http://www.abc.com/video/wc.avi');
 * // => true
 */
function isValidVideoLink(val) {
  const reg = /^https?:\/\/.*?(?:swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)$/i;

  return reg.test(val);
}

export default isValidVideoLink;
