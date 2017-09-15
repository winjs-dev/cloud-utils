/**
 * 获取location.href参数
 *
 * @param {string} name
 * @returns {*}
 * @example
 *
 * window.location.href = 'http://www.baidu.com/?a=1&b=2';
 *
 * getLocationHrefParam('a');
 * // => 1
 */
function getLocationHrefParam(name) {
  // 构造一个含有目标参数的正则表达式对象
  var r = new RegExp('(\\?|#|&)' + name + '=([^&#]*)(&|#|$)');
  var m = window.location.href.match(r);

  if (r !== null) return decodeURIComponent(!m ? '' : m[2]);
  return null;
}

export default getLocationHrefParam;
