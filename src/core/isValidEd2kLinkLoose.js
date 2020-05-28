/**
 * 是否为有效的ed2k链接(宽松匹配)
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidEd2kLinkLoose('ed2k://|file|%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/');
 * // => true
 */
function isValidEd2kLinkLoose(val) {
  const reg = /^ed2k:\/\/\|file\|.+\|\/$/;

  return reg.test(val);
}

export default isValidEd2kLinkLoose;
