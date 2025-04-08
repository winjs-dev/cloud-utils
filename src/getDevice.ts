/*
 * @Author: liwb lwbhtml@163.com
 * @Date: 2025-04-01 13:07:17
 * @LastEditors: liwb lwbhtml@163.com
 * @LastEditTime: 2025-04-01 13:12:55
 * @FilePath: /cloud-utils-rslib/src/getDevice.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import '../.internal/ua-parser';

declare global {
  interface Window {
    UAParser: any;
  }
}

interface DeviceInfo {
  android: boolean;
  iphone: boolean;
  ipad: boolean;
  result: any; // UAParser result type
  osVersion: string;
  os?: 'android' | 'ios';
  androidChrome?: boolean;
  ios?: boolean;
  webView: boolean | null;
}

/**
 * 获取移动设备信息，如是否是iOS，android等
 * 
 * @returns {DeviceInfo} 设备信息对象
 * @example
 * 
 * const device = getDevice();
 * console.log(device);
 * // => {
 * //   androidChrome: false,
 * //   ipad: false,
 * //   iphone: true,
 * //   android: false,
 * //   ios: true,
 * //   os: "ios",
 * //   osVersion: "9.1",
 * //   webView: null
 * // }
 */
export function getDevice(): DeviceInfo {
  const uap = new window.UAParser();
  const result = uap.getResult();
  const ua = result.ua;
  const os = result.os;
  const browser = result.browser;
  const deviceInfo = result.device;
  const device: DeviceInfo = {
    android: false,
    iphone: false,
    ipad: false,
    result,
    osVersion: os.version,
    webView: null
  };

  const android = os.name === 'Android';
  const ipad = deviceInfo.model === 'iPad';
  const ipod = deviceInfo.model === 'iPod';
  const iphone = deviceInfo.model === 'iPhone';

  device.android = android;
  device.iphone = iphone;
  device.ipad = ipad;

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