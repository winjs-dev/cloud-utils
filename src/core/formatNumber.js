/**
 * 格式化数字、金额、千分位、保留几位小数、舍入舍去
 *
 * @since 1.0.7
 * @param number 要格式化的数字
 * @param decimals 保留几位小数
 * @param decPoint 小数点符号
 * @param thousandsSep 千分位符号
 * @param roundTag 舍入参数，默认 'ceil' 向上取,'floor'向下取,'round' 四舍五入
 * @returns {XML|void|*|string}
 * @example
 *
 * formatNumber(2, 2, '.', ',');
 * // => 2.00
 */

function formatNumber(number, decimals, decPoint, thousandsSep, roundTag) {
  number = (number + '').replace(/[^0-9+-Ee.]/g, '');
  roundTag = roundTag || 'ceil'; // 'ceil','floor','round'
  const n = !isFinite(+number) ? 0 : +number;
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  const sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep;
  const dec = (typeof decPoint === 'undefined') ? '.' : decPoint;
  const re = /(-?\d+)(\d{3})/;
  let s = '';
  const toFixedFix = function (n, prec) {
    var k = Math.pow(10, prec);
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

export default formatNumber;
