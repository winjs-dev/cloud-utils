/**
 * 判断 iPhone X Series 机型，刘海屏
 * @returns {boolean} 是否为iPhone X系列机型
 * @example
 * isPhoneX()
 * // => true
 */
export function isPhoneX(): boolean {
  // X XS, XS Max, XR
  const xSeriesConfig = [
    {
      devicePixelRatio: 3,
      width: 375,
      height: 812
    },
    {
      devicePixelRatio: 3,
      width: 414,
      height: 896
    },
    {
      devicePixelRatio: 2,
      width: 414,
      height: 896
    }
  ];

  if (typeof window !== 'undefined' && window) {
    const isIOS = /iphone/gi.test(window.navigator.userAgent);
    if (!isIOS) return false;
    const { devicePixelRatio, screen } = window;
    const { width, height } = screen;
    return xSeriesConfig.some(
      item =>
        devicePixelRatio === item.devicePixelRatio &&
        width === item.width &&
        height === item.height
    );
  }
  return false;
}
