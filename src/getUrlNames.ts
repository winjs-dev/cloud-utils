import getLocationHrefParam from './getLocationHrefParam';
import isEmptyObject from './isEmptyObject';

/**
 * 根据参数获取对应的值
 * @param {string} name - 要获取的参数名
 * @returns {Record<string, string>} 返回解析后的参数对象
 * @throws {TypeError} 当name参数不是字符串时抛出
 * @example
 *
 * // window.location.href: 'http://www.baidu.com/?a=1&b=2&state=broker:aaaa1111ccc;tenant:asdfasdf;view_tag:2;
 * getUrlNames('state');
 * // => {broker: "aaaa1111ccc", tenant: "asdfasdf", view_tag: "2"}
 *
 * getUrlNames('view_tag');
 * // => {view_tag: "2"}
 */
export function getUrlNames(name: string): Record<string, string> {
  if (typeof name !== 'string') throw new TypeError('参数name必须是字符串');
  const urlParam = getLocationHrefParam(name);
  const o: Record<string, string> = {};

  if (urlParam) {
    const str = urlParam.split(';');

    for (let i = 0, len = str.length; i < len; i++) {
      if (str[i].indexOf(':') !== -1) {
        const str1 = str[i].split(':');
        o[str1[0]] = str1[1];
      }
    }
  }

  return !isEmptyObject(o) ? o : '';
}