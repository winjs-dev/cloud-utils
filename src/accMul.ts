/**
 * 乘法函数，用来得到精确的乘法结果<br>
 * javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1乘以arg2的精确结果
 * @example
 *
 * accMul(0.222, 0.3333)
 * // => 0.0739926
 *
 * @example
 * accMul(1.5, 2.5)
 * // => 3.75
 *
 * @example
 * accMul(-2, 3.5)
 * // => -7
 */
export function accMul(arg1: number, arg2: number): number {
  let m = 0;
  const s1 = arg1.toString();
  const s2 = arg2.toString();

  try {
    s1.split('.')[1] && (m += s1.split('.')[1].length);
  } catch (e) {
    console.error(e);
  }
  try {
    s2.split('.')[1] && (m += s2.split('.')[1].length);
  } catch (e) {
    console.error(e);
  }
  return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
}