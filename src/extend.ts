/**
 * 将from所有的键值对都添加到to上面去，返回to
 * @template T - 目标对象类型
 * @template U - 源对象类型
 * @param {T} to - 目标对象
 * @param {U} from - 源对象
 * @returns {T & U} 合并后的对象
 * @example
 * const from = {mobile: '15858264903', nickname: 'liwb'};
 * const to = {nickname: 'cklwb'};
 *
 * extend(to, from);
 * // => {nickname: "liwb", mobile: "15858264903"}
 *
 * @example
 * const obj1 = {a: 1};
 * const obj2 = {b: 2};
 * extend(obj1, obj2);
 * // => {a: 1, b: 2}
 */
export function extend<T extends object, U extends object>(to: T, from: U): T & U {
  const keys = Object.keys(from) as Array<keyof U>;
  let i = keys.length;
  while (i--) {
    (to as any)[keys[i]] = from[keys[i]];
  }
  return to as T & U;
}