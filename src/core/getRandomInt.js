/**
 * 获取max与min之间的随机数
 *
 * @param {number} min
 * @param {number} max
 * @returns {*}
 * @example
 *
 * getRandomInt(1, 9);
 * // => 2
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomInt;
