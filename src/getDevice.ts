/*
 * @Author: liwb lwbhtml@163.com
 * @Date: 2025-04-01 13:07:17
 * @LastEditors: liwb lwbhtml@163.com
 * @LastEditTime: 2025-06-10 13:12:55
 */
import './.internal/ua-parser.js';

declare global {
  interface Window {
    UAParser: any;
  }
}

interface DeviceInfo {
  isLightOS: boolean;
  hms: boolean;
  android: boolean;
  iphone: boolean;
  ipad: boolean;
  result: any; // UAParser result type
  osVersion: string;
  os?: 'android' | 'ios' | 'HarmonyOS';
  androidChrome?: boolean;
  ios?: boolean;
  webView: boolean | null;
}

/**
 * 获取移动设备信息，如是否是iOS，android、hms、isLightOS等
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
    hms: false,
    isLightOS: false,
    result,
    osVersion: os.version,
    webView: null
  };

  const android = os.name === 'Android';
  const ipad = deviceInfo.model === 'iPad';
  const ipod = deviceInfo.model === 'iPod';
  const iphone = deviceInfo.model === 'iPhone';
  const hms = ua.toLowerCase().indexOf('arkweb') !== -1;
  const isLightOS = ua.toLowerCase().indexOf('lightos') !== -1;

  device.android = android;
  device.iphone = iphone;
  device.ipad = ipad;
  device.hms = hms;
  device.isLightOS = isLightOS;

  // Android
  if (android) {
    device.os = 'android';
    device.androidChrome = browser.name === 'Chrome';
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }

  // HarmonyOS
  if (hms) {
    device.os = 'HarmonyOS';
  }

  // Webview
  device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

  return device;
}
