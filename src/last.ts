/**
 * 获取数组的最后一项
 * @template T
 * @param {T[]} array - 输入数组
 * @returns {T | undefined} 数组的最后一项或undefined
 * @example
 * last(['1','2','3']);
 * // => '3'
 */
export default function last<T>(array: T[]): T | undefined {
  return Array.isArray(array) && array.slice(-1)[0];
}