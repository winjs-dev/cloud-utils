/**
 * 是否为有效的新能源车牌号
 * @param val - 要验证的车牌号字符串
 * @returns 返回是否为有效的新能源车牌号
 * @throws {TypeError} 当val参数不是字符串时抛出
 * @example
 * isNewEnergyLicenseNo('京AD92035');
 * // => true
 *
 * isNewEnergyLicenseNo('甘G23459F');
 * // => true
 */
export function isNewEnergyLicenseNo(val: string): boolean {
  if (typeof val !== 'string') throw new TypeError('参数val必须是字符串');
  const reg = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/;
  return reg.test(val);
}

export default isNewEnergyLicenseNo;