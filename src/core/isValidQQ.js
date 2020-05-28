/**
 * 是否为有效的 qq
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidQQ('814563410');
 * // => true
 */
export default function isValidQQ(val) {
  const reg = /^[1-9][0-9]{4,10}$/;

  return reg.test(val);
}
