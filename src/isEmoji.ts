/**
 * 检查字符串是否包含 emoji 表情
 * 支持 Unicode 6.0 及以上版本的 emoji 表情
 *
 * @param value - 要检查的字符串
 * @returns {boolean} 是否包含 emoji 表情
 * @example
 * 
 * isEmoji('😊'); // => true
 * isEmoji('👋'); // => true
 * isEmoji('Hello'); // => false
 * isEmoji('Hello 😊'); // => true
 * isEmoji(''); // => false
 */
function isEmoji(value: string): boolean {
  const emojiPatterns = [
    '\ud83c[\udf00-\udfff]', // Miscellaneous Symbols and Pictographs
    '\ud83d[\udc00-\ude4f]', // Emoticons
    '\ud83d[\ude80-\udeff]'  // Transport and Map Symbols
  ];
  return new RegExp(emojiPatterns.join('|'), 'g').test(value);
}

export default isEmoji; 