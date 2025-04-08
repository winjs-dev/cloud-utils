/**
 * 获取设备像素比
 * @returns {number} 设备像素比
 * @example
 * getPixelRatio();
 * // => 2
 * @example
 * // 在iPhone设备上
 * getPixelRatio();
 * // => 2
 */
export function getPixelRatio(): number {
  const ctx = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D;
  const dpr = window.devicePixelRatio || 1;
  const bsr = ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio || 1;

  return dpr / bsr;
}