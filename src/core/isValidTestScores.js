/**
 * 是否为有效的考卷分数, 大于等于0, 小于等于150, 支持小数位出现5, 如145.5
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidTestScores('150');
 * // => true
 *
 * isValidTestScores('149.5');
 * // => true
 */
function isValidTestScores(val) {
  const reg = /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:.5)?$/;

  return reg.test(val);
}

export default isValidTestScores;
