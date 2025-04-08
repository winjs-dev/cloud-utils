/**
 * 基于给定的键返回嵌套JSON对象中的目标值
 *
 * {@link https://30secondsofcode.org/object#dig}
 * @param {Record<string, any>} obj - 要搜索的嵌套对象
 * @param {string} target - 要查找的目标键
 * @returns {any} 找到的值或undefined
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
export function dig(obj: Record<string, any>, target: string): any {
  return target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
      if (acc !== undefined) return acc;
      if (typeof val === 'object') return dig(val, target);
    }, undefined);
}

export default dig;