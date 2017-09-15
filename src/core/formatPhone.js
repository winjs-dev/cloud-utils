/**
 * 手机号码中间部分替换成指定符号
 *
 * @param {string} phone
 * @param {string} symbol 默认为`*`
 * @returns {string|*|XML|void}
 * @example
 *
 * formatPhone('15858264903');
 * // => 158****4903
 */
function formatPhone(phone, symbol = '****') {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, `$1${symbol}$2`);
}

export default formatPhone;
