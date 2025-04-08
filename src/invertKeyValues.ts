/**
 * 反转对象的键值对
 * 而不会改变它。使用 Object.keys() 和 Array.reduce() 来反转对象的键值对。
 *
 * @param obj - 需要反转键值对的对象
 * @returns 反转键值对后的新对象
 * @example
 *
 * invertKeyValues({ name: 'John', age: 20 });
 * // => { 20: 'age', John: 'name' }
 */
export function invertKeyValues<T extends Record<string, string | number>>(obj: T): Record<string, string> {
  return Object.keys(obj).reduce((acc, key) => {
    acc[obj[key]] = key;
    return acc;
  }, {} as Record<string, string>);
}