/**
 * 驼峰转换下划线
 *
 * @param {string} variable
 * @returns {string}
 * @example
 *
 * toUnderlineVar('getAccountList');
 * // => get_account_list
 */
function toUnderlineVar (variable) {
  return variable.replace(/([A-Z])/g, '_$1').toLowerCase();
}

export default toUnderlineVar;
