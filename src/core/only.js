/**
 * 返回对象的白名单属性
 *
 * {@link https://github.com/tj/node-only}
 * @param obj
 * @param keys
 * @returns {*}
 * @example
 *
 * var obj = {
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com',
  _id: '12345'
};

 * var user = only(obj, 'name last email');
 * // => {
      name: 'tobi',
      last: 'holowaychuk',
      email: 'tobi@learnboost.com'
    }
 */
function only(obj, keys) {
  obj = obj || {};
  if ('string' == typeof keys) keys = keys.split(/ +/);
  return keys.reduce(function(ret, key){
    if (null == obj[key]) return ret;
    ret[key] = obj[key];
    return ret;
  }, {});
}

export default only;
