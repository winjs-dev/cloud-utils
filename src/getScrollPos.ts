/**
 * 获取滚动位置
 * 如果已定义，请使用pageXOffset和pageYOffset，否则使用scrollLeft和scrollTop，可以省略el来使用window的默认值。
 *
 * @since 1.2.1
 * @param {Window|HTMLElement} [el=window] - 目标元素，默认为window
 * @returns {{x: number, y: number}} 滚动位置对象
 * @example
 *
 * getScrollPos();
 * // => {x: 0, y: 200}
 */
export function getScrollPos(el: Window | HTMLElement = window): {x: number, y: number} {
  return {
    x: (el as Window).pageXOffset !== undefined ? (el as Window).pageXOffset : (el as HTMLElement).scrollLeft,
    y: (el as Window).pageYOffset !== undefined ? (el as Window).pageYOffset : (el as HTMLElement).scrollTop
  };
}
