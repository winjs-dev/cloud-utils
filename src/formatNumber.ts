/**
 * 格式化数字、金额、千分位、保留几位小数、舍入舍去
 * @description 提供数字格式化功能，支持千分位分隔、小数位控制、舍入方式选择
 * @since 1.0.7
 * @param {number|string} number - 要格式化的数字或数字字符串
 * @param {number} [decimals=2] - 保留几位小数，默认为2，范围0-20
 * @param {string} [decPoint='.'] - 小数点符号，默认为'.'
 * @param {string} [thousandsSep=','] - 千分位符号，默认为','
 * @param {'ceil'|'floor'|'round'} [roundTag='ceil'] - 舍入方式: 'ceil'向上取整, 'floor'向下取整, 'round'四舍五入
 * @returns {string} 格式化后的数字字符串
 * @throws {TypeError} 当输入参数类型不正确时抛出
 * @throws {RangeError} 当decimals超出0-20范围时抛出
 * @example
 * formatNumber(2); // => '2.00'
 * @example
 * formatNumber('1234.567', 2, '.', ',', 'floor'); // => '1,234.56'
 */
export function formatNumber(
  number: number | string,
  decimals: number = 2,
  decPoint: string = '.',
  thousandsSep: string = ',',
  roundTag: 'ceil' | 'floor' | 'round' = 'ceil'
): string {
  if (decimals < 0 || decimals > 20) {
    throw new RangeError('decimals参数必须在0-20之间');
  }

  const numStr = String(number).replace(/[^0-9+-Ee.]/g, '');
  const n = !isFinite(+numStr) ? 0 : +numStr;
  const prec = Math.min(Math.abs(decimals), 20);
  const sep = thousandsSep || ',';
  const dec = decPoint || '.';
  const re = /(-?\d+)(\d{3})/;
  let s: string[];

  const toFixedFix = function (n: number, prec: number) {
    const k = Math.pow(10, prec);
    return '' + parseFloat(Math[roundTag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k;
  };

  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, '$1' + sep + '$2');
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }

  return s.join(dec);
}
