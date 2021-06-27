/**
 * 将字节转换成友好格式，如Bytes，KB，MB
 *
 * @param num
 * @param precision 3位数字的默认精度
 * @param addSpace 默认情况下在数字和单位之间添加空格
 * @returns {string}
 * {@link https://www.30secondsofcode.org/js/s/pretty-bytes}
 * @example
 *
 * prettyBytes(10000)
 * // => '1 KB'
 * // prettyBytes(-27145424323.5821, 5);
 * // => '-27.145 GB'
 * // prettyBytes(123456789, 3, false);
 * // => '123MB'
 */
function prettyBytes (num, precision = 3, addSpace = true) {
  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];
  const exponent = Math.min(
    Math.floor(Math.log10(num < 0 ? -num : num) / 3),
    UNITS.length - 1
  );
  const n = Number(
    ((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision)
  );
  return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];
}

export default prettyBytes;
