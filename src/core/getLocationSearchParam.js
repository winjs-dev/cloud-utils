/**
 * 获取location.search的参数
 *
 * @param {string} name
 * @returns {*}
 * @example
 *
 * window.location.href = 'http://www.baidu.com/?a=1&b=2';
 *
 * getLocationSearchParam('a');
 * // => 1
 */
function getLocationSearchParam(name) {
  // 构造一个含有目标参数的正则表达式对象
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  // 匹配目标参数
  var r = window.location.search.substr(1).match(reg);

  if (r !== null) return decodeURIComponent(r[2]);

  return null;
}

export default getLocationSearchParam;
