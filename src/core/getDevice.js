import 'ua-parser-js/dist/ua-parser.min';

/**
 * 获取移动设备信息，如是否是iOS，android等
 *
 * @returns {{}}
 * @example
 *
 * getDevice();
 * // => {"androidChrome":false,"ipad":false,"iphone":true,"android":false,"ios":true,"os":"ios","osVersion":"9.1","webView":null}
 */
function getDevice () {
  var uap = new window.UAParser();
  var result = uap.getResult();
  var ua = result.ua;
  var os = result.os;
  var browser = result.browser;
  var deviceInfo = result.device;
  var device = {};
  var android = os.name === 'Android';
  var ipad = deviceInfo.model === 'iPad';
  var ipod = deviceInfo.model === 'iPod';
  var iphone = deviceInfo.model === 'iPhone';

  device.android = android;
  device.iphone = iphone;
  device.ipad = ipad;

  device.result = result;
  device.osVersion = os.version;

  // Android
  if (android) {
    device.os = 'android';
    device.androidChrome = browser.name === 'Chrome';
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // Webview
  device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

  return device;
}

export default getDevice;
