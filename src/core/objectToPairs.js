/**
 * 对象转化为键值对
 * 使用 Object.keys() 和 Array.map() 遍历对象的键并生成一个包含键值对的数组。
 * 
 * @param obj
 * @returns {any[][]}
 * @example
 *
 * objectToPairs({ a: 1, b: 2 });
 * // => [['a',1],['b',2]]
 */
const objectToPairs = (obj) => Object.keys(obj).map((k) => [k, obj[k]]);

export default objectToPairs;
