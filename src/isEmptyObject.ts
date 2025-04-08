/**
 * 判断值是否为空对象
 * 检查一个值是否为对象类型且没有任何可枚举的属性
 *
 * @param val - 要检查的值
 * @returns {boolean} 是否为空对象
 * @example
 *
 * isEmptyObject({}); // => true
 * isEmptyObject({ a: 1 }); // => false
 * isEmptyObject([]); // => false
 * isEmptyObject(null); // => false
 * isEmptyObject(undefined); // => false
 */
export function isEmptyObject(val: unknown): boolean {
  if (val !== Object(val)) return false;
  return Object.keys(val as object).length === 0;
}
