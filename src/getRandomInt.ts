/**
 * 获取max与min之间的随机数
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @returns {number} 随机整数
 * @example
 * getRandomInt(1, 9);
 * // => 2
 */
export function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
