/**
 * prettyBytes
 * @Author: liwb (lwbhtml@163.com)
 * @Date: 2025-04-09 11:13
 * @LastEditTime: 2025-04-09 11:13
 * @Description: prettyBytes
 */
/**
 * 将字节数转换为易读的格式（如 KB、MB、GB）
 * @description 将字节数转换为带单位的友好显示格式，支持自定义精度和间距
 * @param {number} num - 要转换的字节数（可正可负）
 * @param {number} [precision=3] - 显示精度（有效数字位数），默认为3
 * @param {boolean} [addSpace=true] - 是否在数字和单位间添加空格，默认为true
 * @returns {string} 格式化后的字符串
 * @throws {TypeError} 当输入参数不是数字时抛出
 * @example
 * prettyBytes(10000); // => '1 KB'
 * prettyBytes(-27145424323.5821, 5); // => '-27.145 GB'
 * prettyBytes(123456789, 3, false); // => '123MB'
 */
export function prettyBytes(num: number, precision: number = 3, addSpace: boolean = true): string {
  if (typeof num !== 'number') {
    throw new TypeError('输入参数必须是数字类型');
  }

  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  if (Math.abs(num) < 1) {
    return num + (addSpace ? ' ' : '') + UNITS[0];
  }

  const exponent = Math.min(
    Math.floor(Math.log10(Math.abs(num)) / 3),
    UNITS.length - 1
  );

  const n = Number(
    (Math.abs(num) / Math.pow(1000, exponent)).toPrecision(precision)
  );

  return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];
}
