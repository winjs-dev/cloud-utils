/**
 * 是否为有效的 qq
 * @param {string} val - 需要验证的QQ号码
 * @returns {boolean} 是否为有效的QQ
 * @example
 * isValidQQ('814563410');
 * // => true
 */
export function isValidQQ(val: string): boolean {
  const reg = /^[1-9][0-9]{4,10}$/;

  return reg.test(val);
}
