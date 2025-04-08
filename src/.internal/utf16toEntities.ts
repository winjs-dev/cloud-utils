/**
 * utf16字符串转实体字符
 * @param {string} str - 待编译的字符串
 * @returns {string} 转换后的实体字符
 * @throws {TypeError} 当输入参数不是字符串时抛出
 * @example
 *
 * utf16toEntities('𠄩');
 * // => '&#12345;'
 */
function utf16toEntities(str: string): string {
  if (!str) return '';

  const patt = /[\ud800-\udbff][\udc00-\udfff]/g;
  // 检测utf16字符正则
  str = str.replace(patt, function (char) {
    let H: number, L: number, code: number;
    if (char.length === 2) {
      H = char.charCodeAt(0);
      // 取出高位
      L = char.charCodeAt(1);
      // 取出低位
      code = (H - 0xd800) * 0x400 + 0x10000 + L - 0xdc00;
      // 转换算法
      return '&#' + code + ';';
    } else {
      return char;
    }
  });
  return str;
}

export default utf16toEntities;
