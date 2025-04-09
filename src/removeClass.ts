/**
 * removeClass
 * @Author: liwb (lwbhtml@163.com)
 * @Date: 2025-04-09 11:15
 * @LastEditTime: 2025-04-09 11:15
 * @Description: removeClass
 */
import { hasClass } from './hasClass';

/**
 * 去除字符串两端空白字符
 * @private
 */
const trim = function(string: string): string {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

/**
 * DOM操作 - 移除元素的一个或多个class
 * @description 从指定DOM元素中移除一个或多个CSS类名，兼容不支持classList的旧浏览器
 * @since 1.1.5
 * @param {HTMLElement} el - 目标DOM元素
 * @param {string} cls - 要移除的CSS类名，多个类名用空格分隔
 * @returns {void}
 * @throws {TypeError} 当el参数不是HTMLElement时抛出
 * @example
 * // 移除单个class
 * removeClass(document.querySelector('.box'), 'flex');
 *
 * // 移除多个class
 * removeClass(document.querySelector('.box'), 'flex active');
 */
export function removeClass(el: HTMLElement | null, cls: string): void {
  if (!el) return;
  if (!cls) return;

  if (typeof cls !== 'string') {
    throw new TypeError('cls参数必须是字符串');
  }

  const classes = cls.split(' ');
  let curClass = ' ' + el.className + ' ';

  for (let i = 0, j = classes.length; i < j; i++) {
    const clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }

  if (!el.classList) {
    el.className = trim(curClass);
  }
}
