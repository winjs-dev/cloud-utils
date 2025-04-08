/**
 * 清除空格
 *
 * @param str - 需要处理的字符串
 * @param type - 处理类型：1-所有空格  2-前后空格  3-前空格 4-后空格
 * @returns {string} 处理后的字符串
 * @example
 *
 * trim(' 123 ');
 * // => '123'
 */
export function trim(str: string, type: 1 | 2 | 3 | 4 = 1): string {
  if (typeof str !== 'string') throw new Error('输入值必须为字符串');

  switch (type) {
    case 1:
      return str.replace(/\s+/g, '');
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, '');
    case 3:
      return str.replace(/(^\s*)/g, '');
    case 4:
      return str.replace(/(\s*$)/g, '');
    default:
      return str;
  }
}
