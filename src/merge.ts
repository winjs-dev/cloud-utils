/**
 * 深度合并多个对象
 * @description 将多个对象的属性深度合并，数组属性会被展开合并，非数组属性会被转换为数组
 * @template T - 对象值的类型
 * @param {...Record<string, T>[]} objs - 要合并的对象数组
 * @returns {Record<string, T[]>} 合并后的新对象
 * @throws {TypeError} 当输入参数不是对象时抛出
 * @example
 * merge(
 *   { a: 1, b: [2] },
 *   { a: 2, b: [3], c: 'foo' }
 * );
 * // => { a: [1, 2], b: [2, 3], c: ['foo'] }
 */
export function merge<T>(...objs: Array<Record<string, T>>): Record<string, T[]> {
  if (!objs.every(obj => obj && typeof obj === 'object')) {
    throw new TypeError('所有参数必须是对象');
  }

  return objs.reduce<Record<string, T[]>>((acc, obj) => {
    Object.keys(obj).forEach(k => {
      const currentValue = obj[k];
      const existingValue = acc[k];

      acc[k] = existingValue
        ? [...(Array.isArray(existingValue) ? existingValue : [existingValue]),
          ...(Array.isArray(currentValue) ? currentValue : [currentValue])]
        : (Array.isArray(currentValue) ? currentValue : [currentValue]);
    });
    return acc;
  }, {});
}
