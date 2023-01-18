/**
 * 设置 cookie
 * @param name
 * @param value
 * @param domain
 * @param path
 * @param minSec
 * @return {boolean}
 */
export function setCookie({name, value, domain, path, minSec}) {
  const cookieEnabled = window.navigator.cookieEnabled;
  if (name && cookieEnabled) {
    path = path || '/';
    if (typeof value == 'object') {
      value = JSON.stringify(value);
    }
    let exp;
    if (minSec) {
      exp = new Date(); // new Date("December 31, 9998");
      exp.setTime(exp.getTime() + minSec * 1000);
    } else {
      exp = new Date("9998-01-01");
    }
    let cookieString = `${name}=${escape(value)}${minSec?(`;expires=${exp.toGMTString()}`) : ''};path=${path};`;
    if(domain){
      cookieString += `domain=${domain};`;
    }
    document.cookie = cookieString;
    return true;
  }
  return false;
}

/**
 * 获取 cookie
 * @param name
 * @return {null|string}
 */
export function getCookie(name) {
  const cookieEnabled = window.navigator.cookieEnabled;
  if (name && cookieEnabled) {
    const arr = document.cookie.match(new RegExp(`(^| )${name}=([^;]*)(;|$)`));
    if (arr !== null) {
      return unescape(arr[2]);
    }
  }
  return null;
}

/**
 * 清除 cookie
 * @param domain
 * @param path
 */
export function clearCookie(domain, path) {
  const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  path = path || '/';
  if (keys) {
    for (let i = keys.length; i--;) {
      let cookieString = `${keys[i]}=0;expires=${new Date(0).toUTCString()};path=${path};`;
      if(domain){
        cookieString += `domain=${domain};`;
      }
      document.cookie = cookieString;
    }
  }
}

/**
 * 删除 cookie
 * @param name
 * @param domain
 * @param path
 * @return {boolean}
 */
export function removeCookie(name, domain, path) {
  const cookieEnabled = window.navigator.cookieEnabled;
  if (name && cookieEnabled) {
    path = path || '/';
    let cookieString = `${name}=0;expires=${new Date(0).toUTCString()};path=${path};`;
    if(domain){
      cookieString += `domain=${domain};`;
    }
    document.cookie = cookieString;
    return true;
  }
  return false;
}
