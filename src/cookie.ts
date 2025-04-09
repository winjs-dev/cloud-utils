/**
 * 设置 cookie
 * @param {Object} params - 参数对象
 * @param {string} params.name - cookie名称
 * @param {string|Object} params.value - cookie值，可以是字符串或对象
 * @param {string} [params.domain] - cookie域名
 * @param {string} [params.path] - cookie路径，默认为'/'
 * @param {number} [params.minSec] - cookie过期时间（秒）
 * @return {boolean} - 是否设置成功
 * @example
 * setCookie({name: 'token', value: 'abc123', minSec: 3600});
 */
export function setCookie(params: {
  name: string;
  value: string | Record<string, unknown>;
  domain?: string;
  path?: string;
  minSec?: number;
}): boolean {
  const cookieEnabled = window.navigator.cookieEnabled;
  if (params.name && cookieEnabled) {
    const path = params.path || '/';
    let value = params.value;
    if (typeof value === 'object') {
      value = JSON.stringify(value);
    }
    let exp;
    if (params.minSec) {
      exp = new Date();
      exp.setTime(exp.getTime() + params.minSec * 1000);
    } else {
      exp = new Date("9998-01-01");
    }
    let cookieString = `${params.name}=${encodeURIComponent(String(value))}${params.minSec ? (`;expires=${exp.toUTCString()}`) : ''};path=${path};`;
    if(params.domain){
      cookieString += `domain=${params.domain};`;
    }
    document.cookie = cookieString;
    return true;
  }
  return false;
}

/**
 * 获取 cookie
 * @param {string} name - cookie名称
 * @return {string|null} - cookie值，不存在时返回null
 * @example
 * const token = getCookie('token');
 */
export function getCookie(name: string): string | null {
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
 * 清除所有 cookie
 * @param {string} [domain] - 可选域名
 * @param {string} [path] - 可选路径，默认为'/'
 * @example
 * clearCookie('example.com');
 */
export function clearCookie(domain?: string, path: string = '/'): void {
  const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
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
 * 删除指定 cookie
 * @param {string} name - cookie名称
 * @param {string} [domain] - 可选域名
 * @param {string} [path] - 可选路径，默认为'/'
 * @return {boolean} - 是否删除成功
 * @example
 * removeCookie('token', 'example.com');
 */
export function removeCookie(name: string, domain?: string, path: string = '/'): boolean {
  const cookieEnabled = window.navigator.cookieEnabled;
  if (name && cookieEnabled) {
    let cookieString = `${name}=0;expires=${new Date(0).toUTCString()};path=${path};`;
    if(domain){
      cookieString += `domain=${domain};`;
    }
    document.cookie = cookieString;
    return true;
  }
  return false;
}

