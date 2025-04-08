/**
 * 数字取余防止精度丢失
 * @param { number } arg1 数字1
 * @param { number } arg2 数字2
 * @returns 两数字相除取余
 *
 * @example
 * accMod(10, 3)
 * // => 1
 *
 * @example
 * accMod(10.5, 3)
 * // => 1.5
 *
 * @example
 * accMod(-10, 3)
 * // => -1
 */
export function accMod(arg1: number, arg2: number): number {
  let r1: number;
  let r2: number;
  let m: number;
  let c: number;

  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  c = Math.abs(r1 - r2);
  m = Math.pow(10, Math.max(r1, r2));
  if (c > 0) {
    const cm = Math.pow(10, c);
    if (r1 > r2) {
      arg1 = Number(arg1.toString().replace('.', ''));
      arg2 = Number(arg2.toString().replace('.', '')) * cm;
    } else {
      arg1 = Number(arg1.toString().replace('.', '')) * cm;
      arg2 = Number(arg2.toString().replace('.', ''));
    }
  } else {
    arg1 = Number(arg1.toString().replace('.', ''));
    arg2 = Number(arg2.toString().replace('.', ''));
  }
  return (arg1 % arg2) / m;
}