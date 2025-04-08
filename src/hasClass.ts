/**
 * Dom 操作，元素是包含某个 class
 *
 * @since 1.1.5
 * @param {HTMLElement} el - HTML元素
 * @param {string} cls - css类名
 * @returns {boolean}
 * @example
 *
 * <div class="box flex"></div>
 * hasClass(document.querySelector('.box'), 'flex');
 * // => true
 */
export function hasClass(el: HTMLElement | null, cls: string): boolean {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}