/**
 * 返回对象的白名单属性
 * 
 * {@link https://github.com/tj/node-only}
 * @template T - 对象类型
 * @template K - 键类型
 * @param {T} obj - 源对象
 * @param {string|K[]} keys - 白名单键，可以是空格分隔的字符串或数组
 * @returns {Pick<T, K>} - 只包含白名单属性的新对象
 * @example
 * const obj = {
 *   name: 'tobi',
 *   last: 'holowaychuk',
 *   email: 'tobi@learnboost.com',
 *   _id: '12345'
 * };
 * 
 * const user = only(obj, 'name last email');
 * // => {
 * //      name: 'tobi',
 * //      last: 'holowaychuk',
 * //      email: 'tobi@learnboost.com'
 * //    }
 * @example
 * const obj = { a: 1, b: 2, c: 3 };
 * const result = only(obj, ['a', 'b']);
 * // => { a: 1, b: 2 }
 */
function only<T extends object, K extends keyof T>(obj: T, keys: string | K[]): Pick<T, K> {
  obj = obj || {};
  if (typeof keys === 'string') keys = keys.split(/ +/) as K[];
  return (keys as K[]).reduce((ret, key) => {
    if (obj[key] == null) return ret;
    ret[key] = obj[key];
    return ret;
  }, {} as Pick<T, K>);
}

export default only;