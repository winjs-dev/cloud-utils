import { isArray, isObject, isString } from './is';

/**
 * 是否为空
 * 如果a值是空对象，集合，没有可枚举属性或任何不被视为集合的类型，则返回true。
 *
 * {@link https://30secondsofcode.org/type#isempty}
 * @param val
 * @returns {boolean}
 * @example
 *
 * isEmpty([]);
 * // => true
 * isEmpty({});
 * // => true
 * isEmpty('');
 * // => true
 * isEmpty([1, 2]);
 * // => false
 * isEmpty({ a: 1, b: 2 });
 * // => false
 * isEmpty('text');
 * // => false
 * isEmpty(123);
 * // => true - type is not considered a collection
 * isEmpty(true);
 * // => true - type is not considered a collection
 */
function isEmpty(val) {
  if (isArray(val) || isString(val)) {
    return val.length === 0;
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0;
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0;
  }

  return false;
}

export default isEmpty;
