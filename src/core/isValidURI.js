/**
 * 是否为有效的url<br>
 *
 * 支持类型:<br>
 * http(s)://(username:password@)(www.)domain.(com/co.uk)(/...)<br>
 * (s)ftp://(username:password@)domain.com/...<br>
 * git://(username:password@)domain.com/...<br>
 * irc(6/s)://host:port/... //<br>
 * afp over TCP/IP: afp://[<user>@]<host>[:<port>][/[<path>]]<br>
 * telnet://<user>:<password>@<host>[:<port>/]<br>
 * smb://[<user>@]<host>[:<port>][/[<path>]][?<param1>=<value1>[;<param2>=<value2>]]<br>
 *
 * @param {string} val
 * @returns {*}
 * @example
 *
 * isValidURI('https://github.com/lodash');
 * // => true
 */
function isValidURI(url) {
  let protocols = '((https?|s?ftp|irc[6s]?|git|afp|telnet|smb):\\/\\/)?';
  let userInfo = '([a-z0-9]\\w*(\\:[\\S]+)?\\@)?';
  let domain = '([a-z0-9]([\\w]*[a-z0-9])*\\.)?[a-z0-9]\\w*\\.[a-z]{2,}(\\.[a-z]{2,})?';
  let port = '(:\\d{1,5})?';
  let ip = '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}';
  let address = '(\\/\\S*)?';
  let domainType = [protocols, userInfo, domain, port, address];
  let ipType = [protocols, userInfo, ip, port, address];

  let verify = function (type) {
    return new RegExp('^' + type.join('') + '$', 'i').test(url);
  };

  return verify(domainType) || verify(ipType);
}

export default isValidURI;
