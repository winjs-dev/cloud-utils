/**
 * 用符号（默认为逗号）格式化金钱
 *
 * @param {string} val
 * @param {string} symbol 默认`,`
 * @returns {string|*|XML|void}
 * @example
 *
 * formatMoney('1234567890');
 * // => 1,234,567,890
 */
function formatMoney(val, symbol = ',') {
  return val.replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
}

export default formatMoney;
