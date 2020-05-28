/**
 * 获取数组，对象或字符串的大小。
 * Get type of val (array, object or string). Use length property for arrays. Use length or size value if available or number of keys for objects. Use size of a Blob object created from val for strings.

 获取 val （array，object 或 string）的类型。 对于数组使用 length 属性。 对于对象，使用 length 或 size 如果可用的话，或者对象的键的数量。 对于字符串，使用根据 val 创建的Blob对象 的 size。

 通过 split('') 将字符串拆分成字符数组并返回其长度。

 * @param val
 * @returns {*}
 * @example
 *
 * size([1, 2, 3, 4, 5]);
 * // =>  5
 *
 * size('size');
 * // => 4
 *
 * size({ one: 1, two: 2, three: 3 });
 * // => 3
 */
const size = (val) =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === 'object'
    ? val.size || val.length || Object.keys(val).length
    : typeof val === 'string' ? new Blob([val]).size : 0;

export default size;
