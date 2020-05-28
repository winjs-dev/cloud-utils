import isLightOS from './isLightOS';

/**
 * 兼容 lightOS 离线包及 tzyj 在线
 * @param method {string}
 * @param params {object}
 * @param cb     {function}
 * @description
 * 分为两种情况<br>
 * 在线及离线<br>
 * 在线的情况下，H5应用是运行在 tzyj 的webview里，目前 navigator.userAgent 并没有 lightos，所以只能用tzyj自身注入的对象 window.winner<br>
 * 离线包情况下，H5应用是运行在 light 的容器里。因此就可以利用 light 本身提供的SDK，即使 tzyj 自身封装扩展的方法，如获取自选股等，是基于 light 的容器，也需要改造
 *
 */
function nativeJSBridge({method = '', params = null, cb = null}) {
  if (isLightOS()) {
    // tzyj 在 light 的 基类上自行扩展封装的方法
    if (method === 'winner.hsJsFunction') {
      window.LightJSBridge && window.LightJSBridge.call(method, params, function (result) {
        let ret = null;
        if (result.info && result.info.error_message === 'success') {
          ret = result.data;
        }
        typeof cb === 'function' && cb(ret);
      });
    } else {
      // LightSDK
      window.LightSDK && window.LightSDK.native[method](params, function (result) {
        let ret = null;
        if (result.info && result.info.error_message === 'success') {
          ret = result.data;
        }
        typeof cb === 'function' && cb(ret);
      });
    }
  } else {
    // 非 Light 容器，
    // 安卓和IOS的在线版本
    if (typeof window.winner === 'object') {
      window.winner.hsJsFunction(JSON.stringify(params));
    }
  }
}

export default nativeJSBridge;
