/**
 * 深层克隆对象
 * @template T
 * @param {T} obj - 要克隆的对象
 * @returns {T} - 克隆后的新对象
 * @example
 *
 * const a = { foo: 'bar', obj: { a: 1, b: 2 } };
 * const b = deepClone(a);
 * // => a !== b, a.obj !== b.obj
 *
 * @example
 * const arr = [1, 2, { a: 3 }];
 * const clonedArr = deepClone(arr);
 * // => arr !== clonedArr, arr[2] !== clonedArr[2]
 */
function deepClone<T>(obj: T): T {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let clone: any = Array.isArray(obj) ? [] : {};
  
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
    }
  }
  
  return clone as T;
}

export default deepClone;