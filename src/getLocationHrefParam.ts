/**
 * getLocationHrefParam
 * @Author: liwb (lwbhtml@163.com)
 * @Date: 2025-04-09 10:31
 * @LastEditTime: 2025-04-09 10:31
 * @Description: getLocationHrefParam
 */
/**
 * 获取URL中指定参数的值
 * @description 从当前页面的URL中解析出指定参数的值，支持查询参数(?)、哈希参数(#)和锚点参数(&)
 * @param {string} name - 要获取的参数名称
 * @returns {string | null} - 返回解码后的参数值，如果参数不存在则返回null
 * @throws {TypeError} - 当name参数不是字符串时抛出
 * @example
 * // 假设当前URL为: http://www.example.com/?id=123&name=test
 * getLocationHrefParam('id');  // => "123"
 * getLocationHrefParam('name'); // => "test"
 * getLocationHrefParam('none'); // => null
 */
export function getLocationHrefParam(name: string): string | null {
  // 构造正则表达式匹配以下三种情况：
  // 1. 以?或#或&开头 + 参数名 + = + 非&#的任意字符 + 以&或#或结尾
  const r = new RegExp('(\\?|#|&)' + name + '=([^&#]*)(&|#|$)');
  const m = window.location.href.match(r);

  // 如果匹配成功则返回解码后的参数值，否则返回null
  if (m !== null) return decodeURIComponent(m[2] || '');
  return null;
}
