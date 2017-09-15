/**
 * 是否为有效的qq
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidQQ('814563410');
 * // => true
 */
export default function isValidQQ(val) {
  const reg = /^[1-9]\d{4,}$/;

  return reg.test(val);
}
