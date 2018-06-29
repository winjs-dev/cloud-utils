/**
 * 数组转换为键值对的对象
 *
 * @since 1.2.1
 * @param array
 * @returns {*}
 * @example
 *
 * objectFromPairs([['a',1],['b',2]]);
 * // => {a: 1, b: 2}
 */
function objectFromPairs(array) {
  return Array.isArray(array) && array.reduce((a, v) => (a[v[0]] = v[1], a), {});
}

export default objectFromPairs;

