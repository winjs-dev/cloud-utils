import getLocationHrefParam from './getLocationHrefParam';
import isEmptyObject from './isEmptyObject';

/**
 * 根据参数获取对应的值
 *
 * @param {string} name
 * @returns {*}
 * @example
 *
 * // window.location.href: 'http://www.baidu.com/?a=1&b=2&state=broker:aaaa1111ccc;tenant:asdfasdf;view_tag:2;
 * getUrlNames('state');
 * // => {broker: "aaaa1111ccc", tenant: "asdfasdf", view_tag: "2"}
 */
function getUrlNames(name) {
  var urlParam = getLocationHrefParam(name);
  var o = {};

  if (urlParam) {
    var str = urlParam.split(';');

    for (var i = 0, len = str.length; i < len; i++) {
      if (str[i].indexOf(':') !== -1) {
        var str1 = str[i].split(':');

        o[str1[0]] = str1[1];
      }
    }
  }

  return !isEmptyObject(o) ? o : '';
}

export default getUrlNames;
