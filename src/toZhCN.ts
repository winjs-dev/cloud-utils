/**
 * 将数字或字符串转换为中文大写金额
 * @param num - 需要转换的数字或字符串
 * @returns 标准会计格式的中文大写金额字符串
 * @example
 * toZhCN(500.3); // => "伍佰元叁角整"
 * toZhCN("1234.56"); // => "壹仟贰佰叁拾肆元伍角陆分"
 * @throws {Error} 当输入数据不符合格式要求时抛出错误
 */
export function toZhCN(num: number | string): string {
  if (typeof num === 'number') {
    num = String(num);
  }
  if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(num)) {
    throw new Error(`非法数据: ${JSON.stringify(num)}`);
  }
  let unit = '京亿万仟佰拾兆万仟佰拾亿仟佰拾万仟佰拾元角分';
  let str = '';
  num += '00';
  const pos = num.indexOf('.');
  if (pos >= 0) {
    num = num.substring(0, pos) + num.substr(pos + 1, 2);
  }
  unit = unit.substr(unit.length - num.length);
  for (let i = 0, len = num.length; i < len; i++) {
    str +=
      '零壹贰叁肆伍陆柒捌玖'.charAt(Number(num.charAt(i))) + unit.charAt(i);
  }
  return str
    .replace(/零(仟|佰|拾|角)/g, '零')
    .replace(/(零)+/g, '零')
    .replace(/零(兆|万|亿|元)/g, '$1')
    .replace(/(兆|亿)万/g, '$1')
    .replace(/(京|兆)亿/g, '$1')
    .replace(/(京)兆/g, '$1')
    .replace(/(京|兆|亿|仟|佰|拾)(万?)(.)仟/g, '$1$2零$3仟')
    .replace(/^元零?|零分/g, '')
    .replace(/(元|角)$/g, '$1整');
}
