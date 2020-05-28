/**
 * 版本号格式必须为X.Y.Z
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidSemverVersion('16.3.10');
 * // => true
 */
function isValidSemverVersion(val) {
  const reg = /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:.5)?$/;

  return reg.test(val);
}

export default isValidSemverVersion;
