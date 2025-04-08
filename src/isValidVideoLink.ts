/**
 * 是否为有效的视频链接地址（视频格式可按需增删）
 * @param {string} val - 待验证的视频链接
 * @returns {boolean} 是否为有效的视频链接
 * @example
 * isValidVideoLink('http://www.abc.com/video/wc.avi');
 * // => true
 */
export default function isValidVideoLink(val: string): boolean {
  const reg = /^https?:\/\/.*?(?:swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)$/i;
  return reg.test(val);
}