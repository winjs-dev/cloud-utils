/**
 * 下划线转换小驼峰
 * @param {string} variable - 需要转换的下划线格式字符串
 * @returns {string} 转换后的小驼峰格式字符串
 * @example
 * toCamelCaseVar('get_account_list'); // => 'getAccountList'
 * toCamelCaseVar('user_name'); // => 'userName'
 */
export function toCamelCaseVar(variable: string): string {
  return variable.replace(/_+[a-zA-Z]/g, (str, index) => index ? str.substr(-1).toUpperCase() : str);
}
