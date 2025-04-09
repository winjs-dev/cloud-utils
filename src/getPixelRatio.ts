/**
 * 获取设备像素比(Device Pixel Ratio)
 * @description 计算并返回当前设备的实际像素与CSS像素的比例
 * @returns {number} 设备像素比，通常为1(普通显示器)或2(Retina等高DPI显示器)
 * @throws {Error} 当无法创建canvas上下文时抛出错误
 * @example
 * // 在普通显示器上
 * getPixelRatio();
 * // => 1
 * @example
 * // 在Retina显示器上
 * getPixelRatio();
 * // => 2
 */
export function getPixelRatio(): number {
  const ctx = document.createElement('canvas').getContext('2d') as CanvasRenderingContext2D & {
    webkitBackingStorePixelRatio?: number;
    mozBackingStorePixelRatio?: number;
    msBackingStorePixelRatio?: number;
    oBackingStorePixelRatio?: number;
  };

  const dpr = window.devicePixelRatio || 1;
  const bsr = ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio || 1;

  return dpr / bsr;
}
