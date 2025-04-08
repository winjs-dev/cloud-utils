/**
 * 格式化数字、金额、千分位、保留几位小数、舍入舍去
 *
 * @since 1.0.7
 * @param number - 要格式化的数字
 * @param decimals - 保留几位小数，默认为2
 * @param decPoint - 小数点符号，默认为'.'
 * @param thousandsSep - 千分位符号，默认为','
 * @param roundTag - 舍入参数，默认'ceil'向上取,'floor'向下取,'round'四舍五入
 * @returns 格式化后的数字字符串
 * @example
 *
 * formatNumber(2, 2, '.', ',');
 * // => '2.00'
 *
 * formatNumber(1234.567, 2, '.', ',', 'floor');
 * // => '1,234.56'
 */
export function formatNumber(
  number: number | string,
  decimals: number = 2,
  decPoint: string = '.',
  thousandsSep: string = ',',
  roundTag: 'ceil' | 'floor' | 'round' = 'ceil'
): string {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '');
  const n = !isFinite(+number) ? 0 : +number;
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  const sep = thousandsSep || ',';
  const dec = decPoint || '.';
  const re = /(-?\d+)(\d{3})/;
  let s = '';
  
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