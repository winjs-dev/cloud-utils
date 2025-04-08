/**
 * 是否为有效的中国邮政编码
 * @param {string} val - 待验证的邮政编码
 * @returns {boolean} 是否为有效的中国邮政编码
 * @example
 * isValidZipcode('330561');
 * // => true
 */
export default function isValidZipcode(val: string): boolean {
  const reg = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/;
  return reg.test(val);
}