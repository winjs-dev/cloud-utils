/**
 * 下划线转换小驼峰
 *
 * @param {string} variable
 * @returns {string}
 * @example
 *
 * toCamelCaseVar('get_account_list');
 * // => getAccountList
 */
function toCamelCaseVar (variable) {
  return variable.replace(/_+[a-zA-Z]/g, (str, index) => index ? str.substr(-1).toUpperCase() : str);
}

export default toCamelCaseVar;
