/**
 * 获取网址参数
 * @param {string} [url=window.location.href] - 要解析的URL字符串，默认为当前页面URL
 * @returns {Record<string, string>} 返回包含当前URL参数的对象
 * @throws {TypeError} 当url参数不是字符串时抛出
 * @example
 *
 * getURLParameters('http://url.com/page?name=Adam&surname=Smith');
 * // => {name: 'Adam', surname: 'Smith'}
 *
 * getURLParameters('https://example.com?page=1&size=10');
 * // => {page: '1', size: '10'}
 */
export function getURLParameters(url: string = window.location.href): Record<string, string> {
  if (typeof url !== 'string') throw new TypeError('参数url必须是字符串');
  const paramsArr = url.match(/([^?=&]+)(=([^&]*))/g);
  if (!paramsArr) return {};
  return paramsArr.reduce((a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {} as Record<string, string>);
}
