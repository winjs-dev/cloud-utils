import { isArray, isObject, isString } from './is';

/**
 * 判断值是否为空
 * 如果值是空对象、空集合、空字符串、空数组或任何不被视为集合的类型，则返回 true。
 *
 * {@link https://30secondsofcode.org/type#isempty}
 * @param val - 要检查的值
 * @returns {boolean} 是否为空
 * @example
 * 
 * isEmpty([]); // => true
 * isEmpty({}); // => true
 * isEmpty(''); // => true
 * isEmpty([1, 2]); // => false
 * isEmpty({ a: 1, b: 2 }); // => false
 * isEmpty('text'); // => false
 * isEmpty(123); // => true - 数字类型不被视为集合
 * isEmpty(true); // => true - 布尔类型不被视为集合
 * isEmpty(new Map()); // => true
 * isEmpty(new Set()); // => true
 */
function isEmpty(val: unknown): boolean {
  if (isArray(val) || isString(val)) {
    return (val as Array<unknown> | string).length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val as object).length === 0;
  }

  return false;
}

export default isEmpty; 