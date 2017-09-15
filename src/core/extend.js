/**
 * 将from所有的键值对都添加到to上面去，返回to
 *
 * @param {Object} to
 * @param {Object} from
 * @returns {*}
 * @example
 *
 * const from = {mobile: '15858264903', nickname: 'liwb'};
 * const to = {nickname: 'cklwb'};
 *
 * extend(to, from);
 * // => {nickname: "liwb", mobile: "15858264903"}
 */
function extend(to, from) {
  var keys = Object.keys(from);
  var i = keys.length;
  while (i--) {
    to[keys[i]] = from[keys[i]];
  }
  return to;
}

export default extend;
