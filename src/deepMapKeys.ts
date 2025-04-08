/**
 * 深层映射对象键
 * @template T
 * @param {T} obj - 要转换键名的对象
 * @param {(key: string) => string} fn - 键名转换函数
 * @returns {T} - 转换后的新对象
 * @example
 *
 * const obj = {
 *   foo: '1',
 *   nested: {
 *     child: {
 *       withArray: [
 *         {
 *           grandChild: ['hello']
 *         }
 *       ]
 *     }
 *   }
 * };
 *
 * const upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());
 * // =>
 * {
 *   "FOO":"1",
 *   "NESTED":{
 *     "CHILD":{
 *       "WITHARRAY":[
 *         {
 *           "GRANDCHILD":[ 'hello' ]
 *         }
 *       ]
 *     }
 *   }
 * }
 */
export function deepMapKeys<T extends Record<string, any>>(obj: T, fn: (key: string) => string): T {
  if (Array.isArray(obj)) {
    return obj.map((val) => deepMapKeys(val, fn)) as unknown as T;
  }

  if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj).reduce((acc, current) => {
      const val = obj[current];
      const newKey = fn(current);
      acc[newKey] =
        val !== null && typeof val === 'object' ? deepMapKeys(val, fn) : val;
      return acc;
    }, {} as Record<string, any>) as T;
  }

  return obj;
}
