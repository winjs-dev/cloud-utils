import utf16toEntities from './utf16toEntities';

/**
 * 实体字符转utf16字符串
 * @param {string} str - 待解析的字符串
 * @returns {string} 转换后的UTF16字符串
 * @throws {TypeError} 当输入参数不是字符串时抛出
 * @example
 *
 * entitiestoUtf16('&#12345;');
 * // => '𠄩'
 */
function entitiestoUtf16(str: string): string {
  if (!str) return '';
  if (typeof str !== 'string') {
    throw new TypeError('需要解析的数据类型需要是字符串类型');
  }
  // 检测出形如&#12345;形式的字符串
  const strObj = utf16toEntities(str);
  const patt = /&#\d+;/g;
  let H: number, L: number, code: string;
  const arr = strObj.match(patt) || [];
  for (let i = 0; i < arr.length; i++) {
    code = arr[i];
    code = code.replace('&#', '').replace(';', '');
    // 高位
    H = Math.floor((code - 0x10000) / 0x400) + 0xd800;
    // 低位
    L = ((code - 0x10000) % 0x400) + 0xdc00;
    code = '&#' + code + ';';
    var s = String.fromCharCode(H, L);
    strObj = strObj.replace(code, s);
  }
  return strObj;
}

export default entitiestoUtf16;
