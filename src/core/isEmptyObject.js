/**
 * 是否为空对象
 *
 * @param {object} o
 * @returns {boolean}
 * @example
 *
 * isEmptyObject({});
 * // => true
 */
function isEmptyObject(o) {
  var t;

  for (t in o) {
    return !1;
  }

  return !0;
}

export default isEmptyObject;
