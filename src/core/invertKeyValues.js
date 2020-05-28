/**
 * 反转对象的键值对
 * 而不会改变它。使用 Object.keys() 和 Array.reduce() 来反转对象的键值对。
 *
 * @param obj
 * @returns {{}}
 * @example
 *
 * invertKeyValues({ name: 'John', age: 20 });
 * // => { 20: 'age', John: 'name' }
 */
const invertKeyValues = (obj) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[obj[key]] = key;
    return acc;
  }, {});

export default invertKeyValues;
