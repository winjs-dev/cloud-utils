/**
 * 转数字
 *
 * @param val
 * @returns {*|number}
 * @example
 *
 * toNumber(1.2);
 * => // 1.2
 */
function toNumber(val) {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
}

export default toNumber;
