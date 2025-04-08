/**
 * 滚动到顶部
 * 使用document.documentElement.scrollTop或document.body.scrollTop获取到顶部的距离。从顶部滚动一小部分距离。
 使用window.requestAnimationFrame（）来滚动。
 *
 * @since 1.2.1
 * @example
 *
 * scrollToTop();
 */
export function scrollToTop(): void {
  const c: number = (document.documentElement.scrollTop || document.body.scrollTop) as number;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}
