/**
 * 基于给定的键返回嵌套JSON对象中的目标值
 *
 * {@link https://30secondsofcode.org/object#dig}
 * @param obj
 * @param target
 * @returns {any}
 * @example
 *
 * const data = {
 *  level1: {
 *    level2: {
 *      level3: 'some data'
 *    }
 *  }
 * };
 * dig(data, 'level3');
 * // => 'some data'
 * dig(data, 'level4');
 * // => undefined
 */
function dig(obj, target) {
  return target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
      if (acc !== undefined) return acc;
      if (typeof val === 'object') return dig(val, target);
    }, undefined);
}

export default dig;
