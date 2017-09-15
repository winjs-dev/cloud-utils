/**
 * 获取浏览器的类型和版本号
 *
 * @returns {{type: string, version: string}}
 * @example
 *
 * getBrowser();
 * // => {type: "chrome", version: "60.0.3112.101"}
 */
function getBrowser() {
  var ua = navigator.userAgent.toLowerCase();
  var type = 'UNKNOW';
  var v;
  var check = function (regex) {
    return regex.test(ua);
  };

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
  } else if (check(/applewebkit/) && check(/safari/)) { // safari (!check(/\bchrome\b/) is ensure by non-chrome above)
    type = 'safari';
    v = /version[\/|\s]*([\d+?\.?]+)/.exec(ua);
  } else if (check(/opera/)) {
    type = 'opera';
    v = /version[\/|\s]*([\d+?.?]+)/.exec(ua) || /opera[\/|\s]*([\d+?.?]+)/.exec(ua);
  }

  return {
    type: type,
    version: (v && v[1]) ? v[1] : 'UNKNOW'
  }
}

export default getBrowser;
