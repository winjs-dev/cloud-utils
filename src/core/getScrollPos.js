/**
 * 获取滚动位置
 * 如果已定义，请使用pageXOffset和pageYOffset，否则使用scrollLeft和scrollTop，可以省略el来使用window的默认值。
 *
 * @since 1.2.1
 * @param el
 * @returns {{x: Number, y: Number}}
 * @example
 *
 * getScrollPos();
 * // => {x: 0, y: 200}
 */
function getScrollPos(el = window) {
  return ({
    x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
    y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
  });
}

export default getScrollPos;
