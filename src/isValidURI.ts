/**
 * 是否为有效的 url
 * @description 支持多种协议类型包括http、ftp、git、irc等
 * @param url - 待验证的URL字符串
 * @returns 返回布尔值，表示是否为有效的URL
 * @example
 * isValidURI('https://github.com/lodash'); // => true
 * isValidURI('ftp://example.com/file.txt'); // => true
 * isValidURI('invalid-url'); // => false
 */
export function isValidURI(url: string): boolean {
  const protocols = '((https?|s?ftp|irc[6s]?|git|afp|telnet|smb):\/\/)?';
  const userInfo = '([a-z0-9]\w*(\:[\S]+)?\@)?';
  const domain = '([a-z0-9]([\w]*[a-z0-9])*\.)?[a-z0-9]\w*\.[a-z]{2,}(\.[a-z]{2,})?';
  const port = '(:\d{1,5})?';
  const ip = '\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}';
  const address = '(\/\S*)?';
  const domainType = [protocols, userInfo, domain, port, address];
  const ipType = [protocols, userInfo, ip, port, address];

  const verify = (type: string[]) => {
    return new RegExp('^' + type.join('') + '$', 'i').test(url);
  };

  return verify(domainType) || verify(ipType);
}
