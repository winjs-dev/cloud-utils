/**
 * 清除空格
 *
 * @param str
 * @param type 1-所有空格  2-前后空格  3-前空格 4-后空格
 * @returns {*}
 * @example
 *
 * trim(' 123 ');
 * // => 123
 */
function trim(str, type = 1) {
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

export default trim;
