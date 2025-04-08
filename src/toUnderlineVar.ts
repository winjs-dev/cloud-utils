/**
 * 驼峰转换下划线
 *
 * @param variable - 需要转换的驼峰字符串
 * @returns 转换后的下划线字符串
 * @example
 *
 * toUnderlineVar('getAccountList');
 * // => 'get_account_list'
 */
export function toUnderlineVar(variable: string): string {
  return variable.replace(/([A-Z])/g, '_$1').toLowerCase();
}