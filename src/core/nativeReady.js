import isLightOS from './isLightOS';

/**
 * 当 H5 页面完全展示之前需要和 native 先进行交互，此用来控制时序。只有 App 调用了 ready(deviceready,hsAppReady) 方法后，表示 App 端已经准备完毕，已注入了相关 js 对象。防止 App 还没注入 js 对象方法，H5 过早调用 App 提供的方法
 * 兼容 lightOS 离线包及 tzyj 在线
 * @param cb  {function}
 * @param type {string} 可选，默认为 light
 */
function nativeReady(cb, type = 'light') {
  if (isLightOS()) {
    document.addEventListener('deviceready', () => {
      typeof cb === 'function' && cb();
    });
  } else {
    if (type === 'winner') {
      document.addEventListener('hsAppReady', () => {
        typeof cb === 'function' && cb();
      });
    }
    typeof cb === 'function' && cb();
  }
}

export default nativeReady;
