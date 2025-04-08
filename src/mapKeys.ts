/**
 * 根据提供函数生成的键生成一个新对象
 * 使用 Object.keys(obj) 来迭代对象的键。 使用 Array.reduce() 创建一个具有相同值的新对象，并使用 fn 来映射键。
 * @template T, K
 * @param {T} obj - 原始对象
 * @param {(value: any, key: string, obj: T) => K} fn - 生成新键的函数
 * @returns {Record<K, any>} 新生成的对象
 * @example
 * mapKeys({ a: 1, b: 2 }, (val, key) => key + val);
 * // => { a1: 1, b2: 2 }
 */
export const mapKeys = <T extends Record<string, any>, K extends string>(
  obj: T,
  fn: (value: any, key: string, obj: T) => K
): Record<K, any> =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {} as Record<K, any>);
