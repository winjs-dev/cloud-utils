/**
 * 获取设备像素比
 *
 * @returns {number}
 * @example
 *
 * // window.navigator.appVersion(5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1)
 * getPixelRatio();
 * // => 2
 */
function getPixelRatio() {
  var ctx = document.createElement('canvas').getContext('2d');
  var dpr = window.devicePixelRatio || 1;
  var bsr = ctx.webkitBackingStorePixelRatio ||
      ctx.mozBackingStorePixelRatio ||
      ctx.msBackingStorePixelRatio ||
      ctx.oBackingStorePixelRatio ||
      ctx.backingStorePixelRatio || 1;

  return dpr / bsr;
}

export default getPixelRatio;
