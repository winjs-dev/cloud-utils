/**
 * 是否为有效的IP v4
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidIPV4('172.16.0.0');
 * // => true
 *
 * isValidIPV4('127.0.0.0');
 * // => true
 *
 */
function isValidIPV4(val) {
  const reg = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  return reg.test(val);
}

export default isValidIPV4;
