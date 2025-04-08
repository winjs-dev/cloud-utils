/**
 * 除法函数，用来得到精确的除法结果<br>
 * javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1除以arg2的精确结果
 * @example
 *
 * accDiv(0.2, 0.3)
 * // => 0.6666666666666666
 *
 * @example
 * accDiv(10, 3)
 * // => 3.3333333333333335
 *
 * @example
 * accDiv(-1, 2)
 * // => -0.5
 */
export function accDiv(arg1: number, arg2: number): number {
  let t1 = 0;
  let t2 = 0;
  let r1: number;
  let r2: number;

  try {
    t1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    console.error(e);
  }
  try {
    t2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    console.error(e);
  }

  r1 = Number(arg1.toString().replace('.', ''));
  r2 = Number(arg2.toString().replace('.', ''));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}