/**
 * 对象转化为键值对
 * 使用 Object.keys() 和 Array.map() 遍历对象的键并生成一个包含键值对的数组。
 *
 * @template T
 * @param {{[key: string]: T}} obj - 需要转换的对象
 * @returns {Array<[string, T]>} 包含键值对的数组
 * @example
 *
 * objectToPairs({ a: 1, b: 2 });
 * // => [['a',1],['b',2]]
 */
export const objectToPairs = <T>(obj: {[key: string]: T}): Array<[string, T]> => Object.keys(obj).map((k) => [k, obj[k]]);
