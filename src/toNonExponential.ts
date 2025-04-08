/**
 * 科学计数法转化为数值字符串形式
 *
 * @param num - 需要转换的数字
 * @returns 转换后的字符串
 * @example
 *
 * toNonExponential(3.3e-7);
 * => // "0.00000033"
 *
 * toNonExponential(3e-7);
 * => // "0.0000003"
 *
 * toNonExponential(1.401e10);
 * => // "14010000000"
 *
 * toNonExponential(0.0004);
 * => // "0.0004"
 */
export function toNonExponential(num: number): string {
  if (typeof num !== 'number') throw new TypeError('数据类型必须是 number');
  
  const m = num.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
  if (!m) throw new Error('无法解析科学计数法');
  
  return num.toFixed(Math.max(0, (m[1] || '').length - Number(m[2])));
}
