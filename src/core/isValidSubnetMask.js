/**
 * 是否为有效的子网掩码
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidSubnetMask('255.255.255.0');
 * // => true
 */
function isValidSubnetMask(val) {
  const reg = /^(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])(?:\.(?:\d{1,2}|1\d\d|2[0-4]\d|25[0-5])){3}$/;

  return reg.test(val);
}

export default isValidSubnetMask;
