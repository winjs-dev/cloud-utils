/**
 * 数组转换为键值对的对象
 *
 * @since 1.2.1
 * @template T
 * @param {Array<[string, T]>} array - 包含键值对数组的数组
 * @returns {{[key: string]: T}} 转换后的对象
 * @example
 *
 * objectFromPairs([['a',1],['b',2]]);
 * // => {a: 1, b: 2}
 */
export function objectFromPairs<T>(array: Array<[string, T]>): {[key: string]: T} {
  return array.reduce((a, v) => (a[v[0]] = v[1], a), {} as {[key: string]: T});
}
