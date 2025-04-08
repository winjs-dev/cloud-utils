/**
 * 获取浏览器的类型和版本号
 * 
 * @returns {{type: string, version: string}} 浏览器类型和版本号
 * @example
 *
 * getBrowser();
 * // => {type: "chrome", version: "60.0.3112.101"}
 */
export function getBrowser(): {type: string, version: string} {
  const ua = navigator.userAgent.toLowerCase();
  let type = 'UNKNOW';
  let v;
  const check = (regex: RegExp) => regex.test(ua);

  // IE
  if (check(/msie/) && !check(/opera/)) {
    type = 'ie';
    v = /msie[\/|\s]*([\d+?\.?]+)/.exec(ua);
  } else if ((!check(/webkit/) && check(/gecko/) && check(/firefox/)) && !check(/opera/)) { // firefox
    type = 'firefox';
    v = /firefox[\/|\s]*([\d+?\.?]+)/.exec(ua);
  } else if (check(/\bchrome\b/)) { // chrome
    type = 'chrome';
    v = /chrome[\/|\s]*([\d+?\.?]+)/.exec(ua);
  } else if (check(/applewebkit/) && check(/safari/)) { // safari
    type = 'safari';
    v = /version[\/|\s]*([\d+?\.?]+)/.exec(ua);
  } else if (check(/opera/)) { // opera
    type = 'opera';
    v = /version[\/|\s]*([\d+?\.?]+)/.exec(ua) || /opera[\/|\s]*([\d+?\.?]+)/.exec(ua);
  }

  return {
    type: type,
    version: v && v[1] ? v[1] : 'UNKNOW'
  };
}