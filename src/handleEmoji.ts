import utf16toEntities from './.internal/utf16toEntities';
import entitiestoUtf16 from './.internal/entitiestoUtf16';

/**
 * 处理emoji，用于把用utf16编码的字符转换成实体字符
 * @param {string} str - 需要编译/解析的字符串
 * @param {'encode' | 'decode'} type - encode 编译 decode 转义
 * @returns {string} 编译/解析后的字符串
 * @example
 *
 * handleEmoji("😃", "encode");
 * // => "&#128515;"
 * handleEmoji("&#128522;", "decode");
 * // => "😊"
 */
export function handleEmoji(str: string = '', type: 'encode' | 'decode' = 'encode'): string {
  if (!str) return '';

  if (type === 'encode') {
    return utf16toEntities(str);
  } else if (type === 'decode') {
    return entitiestoUtf16(str);
  }

  return str;
}
