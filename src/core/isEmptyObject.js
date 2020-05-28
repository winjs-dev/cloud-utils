/**
 * 是否为空对象
 *
 * @param val
 * @returns {boolean}
 * @example
 *
 * isEmptyObject({});
 * // => true
 */
function isEmptyObject(val) {
  if (val !== Object(val)) return false;
  return Object.keys(val).length === 0;
}

export default isEmptyObject;
