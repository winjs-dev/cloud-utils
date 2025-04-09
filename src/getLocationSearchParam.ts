/**
 * getLocationSearchParam
 * @Author: liwb (lwbhtml@163.com)
 * @Date: 2025-04-09 10:32
 * @LastEditTime: 2025-04-09 10:32
 * @Description: getLocationSearchParam
 */
/**
 * 从URL查询字符串中获取指定参数的值
 * @description 专门处理location.search部分的参数，格式为?key=value&key2=value2
 * @param {string} name - 要获取的参数名称
 * @returns {string | null} - 返回解码后的参数值，若参数不存在则返回null
 * @throws {TypeError} - 当name参数不是字符串时抛出
 * @example
 * // 假设当前URL为: http://www.example.com/?id=123&name=test
 * getLocationSearchParam('id');  // => "123"
 * getLocationSearchParam('name'); // => "test"
 * getLocationSearchParam('none'); // => null
 */
export function getLocationSearchParam(name: string): string | null {
  // 构造正则表达式匹配以下格式：
  // 1. 以&或字符串开头 + 参数名 + = + 非&的任意字符 + 以&或字符串结尾
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  // 从location.search去掉问号后匹配参数
  const r = window.location.search.substr(1).match(reg);

  // 匹配成功则返回解码后的参数值(捕获组2)
  if (r !== null) return decodeURIComponent(r[2]);

  return null;
}
