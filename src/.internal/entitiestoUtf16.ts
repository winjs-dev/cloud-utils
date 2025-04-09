import utf16toEntities from './utf16toEntities';

/**
 * 将HTML实体字符转换为UTF-16字符串
 * @description 处理形如&#12345;的HTML实体字符，将其转换为对应的UTF-16字符
 * @param {string} str - 包含HTML实体字符的输入字符串
 * @returns {string} 转换后的UTF-16字符串
 * @throws {TypeError} 当输入参数不是字符串类型时抛出
 * @example
 * entitiestoUtf16('&#12345;');
 * // => '𠄩'
 */
function entitiestoUtf16(str: string): string {
  if (!str) return '';
  if (typeof str !== 'string') {
    throw new TypeError('输入参数必须是字符串类型');
  }

  let strObj = utf16toEntities(str);
  const patt = /&#\d+;/g;
  const arr = strObj.match(patt) || [];

  for (let i = 0; i < arr.length; i++) {
    let codeStr = arr[i];
    const codeNum = parseInt(codeStr.replace(/&#|;/g, ''), 10);

    // 计算UTF-16代理对
    const H = Math.floor((codeNum - 0x10000) / 0x400) + 0xD800;
    const L = ((codeNum - 0x10000) % 0x400) + 0xDC00;

    strObj = strObj.replace(codeStr, String.fromCharCode(H, L));
  }

  return strObj;
}

export default entitiestoUtf16;
