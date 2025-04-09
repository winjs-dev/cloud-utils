/**
 * 从两个或多个对象的组合中创建一个新对象
 * @template T - 对象值类型
 * @param {...Record<string, T>[]} objs - 要合并的对象数组
 * @returns {Record<string, T[]>} 合并后的新对象
 * @example
 * merge(
 *  {
 *    a: [{ x: 2 }, { y: 4 }],
 *    b: 1
 *  },
 *  {
 *    a: { z: 3 },
 *    b: [2, 3],
 *    c: 'foo'
 *  }
 * );
 * // => { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
 */
export function merge<T>(...objs: Record<string, T>[]): Record<string, T[]> {
  return [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k)
          ? [...(Array.isArray(acc[k]) ? acc[k] : [acc[k]]), ...(Array.isArray(obj[k]) ? obj[k] : [obj[k]])]
          : (Array.isArray(obj[k]) ? obj[k] : [obj[k]]);
        return acc;
      }, {} as Record<string, T[]>),
    {} as Record<string, T[]>
  );
}
