/**
 * 获取数组的最后一项
 *
 * @since 1.2.1
 * @param array
 * @returns {boolean}
 * @example
 *
 * last(['1,2,3']);
 * // => '3';
 */
function last(array) {
  return Array.isArray(array) && array.slice(-1)[0];
}

export default last;
