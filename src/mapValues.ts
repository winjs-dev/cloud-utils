/**
 * 根据提供函数返回的值映射一个新对象
 * @template T - 原始对象值类型
 * @template R - 映射后的值类型
 * @param {Record<string, T>} obj - 要映射的对象
 * @param {(value: T, key: string, obj: Record<string, T>) => R} fn - 映射函数
 * @returns {Record<string, R>} 映射后的新对象
 * @example
 * const users = {
 *   fred: { user: 'fred', age: 40 },
 *   pebbles: { user: 'pebbles', age: 1 }
 * };
 * mapValues(users, u => u.age);
 * // => { fred: 40, pebbles: 1 }
 */
export const mapValues = <T, R>(
  obj: Record<string, T>,
  fn: (value: T, key: string, obj: Record<string, T>) => R
): Record<string, R> =>
  Object.keys(obj).reduce((acc, k) => {
    acc[k] = fn(obj[k], k, obj);
    return acc;
  }, {} as Record<string, R>);
