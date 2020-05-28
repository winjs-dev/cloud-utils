/**
 * 根据提供函数生成的键生成一个新对象
 * 使用 Object.keys(obj) 来迭代对象的键。 使用 Array.reduce() 创建一个具有相同值的新对象，并使用 fn 来映射键。
 * 
 * @param obj
 * @param fn
 * @returns {{}}
 * @example
 *
 * mapKeys({ a: 1, b: 2 }, (val, key) => key + val);
 * // => { a1: 1, b2: 2 }
 */
const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {});

export default mapKeys;
