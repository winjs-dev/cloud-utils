/**
 * 从两个或多个对象的组合中创建一个新对象
 *
 * {@link https://30secondsofcode.org/object#merge}
 * @param objs
 * @returns {*}
 * @example
 *
 * merge(
 {
  a: [{ x: 2 }, { y: 4 }],
  b: 1
},
 {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo'
});
 * // => { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
 */
function merge(...objs) {
  return [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
        return acc;
      }, {}),
    {}
  );
}

export default merge;
