/**
 * 是否为有效的 base64格式
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidBase64Format('data:image/gif;base64,xxxx==')
 * => true
 */
function isValidBase64Format(val) {
  const reg = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i;

  return reg.test(val);
}

export default isValidBase64Format;
