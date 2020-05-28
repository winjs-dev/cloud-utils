/**
 * 获取网址参数
 * @param {string} url
 * @returns {{}} 返回包含当前URL参数的对象。
 * @example
 *
 * getURLParameters('http://url.com/page?name=Adam&surname=Smith');
 * => // {name: 'Adam', surname: 'Smith'}
 */
function getURLParameters(url = window.location.href) {
  if (typeof url !== 'string') throw new TypeError('数据类型必须是 string');
  return url
    .match(/([^?=&]+)(=([^&]*))/g)
    .reduce((a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {});
}

export default getURLParameters;
