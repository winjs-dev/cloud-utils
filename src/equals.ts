/**
 * 两个值之间的深入比较，以确定它们是否相等
 * @param {any} a - 第一个要比较的值
 * @param {any} b - 第二个要比较的值
 * @returns {boolean} 如果值相等则返回true，否则返回false
 * @example
 * equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' });
 * // => true
 *
 * @example
 * equals({ a: 1 }, { a: 2 });
 * // => false
 */
export function equals(a: any, b: any): boolean {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a === null || a === undefined || b === null || b === undefined) return false;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;

  return keys.every((k) => equals(a[k], b[k]));
}