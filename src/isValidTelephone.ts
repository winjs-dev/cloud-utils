/**
 * 是否为有效的电话(座机)
 * @param val - 待验证的电话号码字符串
 * @returns 返回布尔值，表示是否为有效的电话号码
 * @example
 * isValidTelephone('0571-4211236'); // => true
 * isValidTelephone('12345678'); // => false
 */
export function isValidTelephone(val: string): boolean {
  const reg = /^0\d{2,3}-\d{7,8}$/;
  return reg.test(val);
}
