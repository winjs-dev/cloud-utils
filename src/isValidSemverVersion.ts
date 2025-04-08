/**
 * 版本号格式必须为X.Y.Z
 * @param {string} val - 需要验证的版本号字符串
 * @returns {boolean} 是否为有效的语义化版本号
 * @example
 * isValidSemverVersion('16.3.10');
 * // => true
 */
export function isValidSemverVersion(val: string): boolean {
  const reg = /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:.5)?$/;

  return reg.test(val);
}
