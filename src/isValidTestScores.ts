/**
 * 是否为有效的考卷分数
 * @description 大于等于0, 小于等于150, 支持小数位出现5, 如145.5
 * @param val - 待验证的分数字符串
 * @returns 返回布尔值，表示是否为有效的考卷分数
 * @example
 * isValidTestScores('150'); // => true
 * isValidTestScores('149.5'); // => true
 * isValidTestScores('160'); // => false
 * isValidTestScores('145.3'); // => false
 */
export function isValidTestScores(val: string): boolean {
  const reg = /^150$|^(?:\d|[1-9]\d|1[0-4]\d)(?:.5)?$/;
  return reg.test(val);
}
