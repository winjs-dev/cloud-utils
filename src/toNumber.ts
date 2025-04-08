/**
 * 将输入值转换为数字
 *
 * @param val - 需要转换的值
 * @returns {number | unknown} - 转换后的数字或原始值
 * @example
 *
 * toNumber(1.2);
 * // => 1.2
 *
 * toNumber('abc');
 * // => 'abc'
 */
export function toNumber(val: unknown): number | unknown {
  const n = parseFloat(val as string);
  return isNaN(n) ? val : n;
}

