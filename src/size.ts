/**
 * 获取数组，对象或字符串的大小。
 * Get type of val (array, object or string). Use length property for arrays. Use length or size value if available or number of keys for objects. Use size of a Blob object created from val for strings.
 *
 * 获取 val （array，object 或 string）的类型。 对于数组使用 length 属性。 对于对象，使用 length 或 size 如果可用的话，或者对象的键的数量。 对于字符串，使用根据 val 创建的Blob对象 的 size。
 * 通过 split('') 将字符串拆分成字符数组并返回其长度。
 * @param val - 要计算大小的值，可以是数组、对象或字符串
 * @returns 返回输入值的大小
 * @example
 * size([1, 2, 3, 4, 5]);
 * // =>  5
 *
 * @example
 * size('size');
 * // => 4
 *
 * @example
 * size({ one: 1, two: 2, three: 3 });
 * // => 3
 */
export const size = (val: any[] | object | string): number =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === 'object'
    ? (val as any).size || (val as any).length || Object.keys(val).length
    : typeof val === 'string' ? new Blob([val]).size : 0;
