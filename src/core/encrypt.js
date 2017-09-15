/**
 * 加密算法
 * 1.所有入参加入集合M，参数名做key, 值做value
 * 2.提供的密钥1（字段名appid）与密钥2（字段名secret）两项，以及当前时间戳（字段名time)也加入集合M,
 * 3.将集合M内非空参数值的参数按照参数名ASCII码从小到大排序（字典序）
 * 4.集合M所有值拼接成字符串，转化成UTF-8编码格式的字节数组, 最后需要取MD5码（signature摘要值）
 *
 * @param {object} params
 * @example
 *
 * const params = { mobile: '15858264900', nickname: 'liwb', appkey: 'ertfgdf345435568123454rtoiko5=' };
 *
 * md5(encrypt(params).toUpperCase());
 * // => md5('APPKEY=ERTFGDF34543545=&MOBILE=15858264903&NICKNAME=LIWB')
 */
function encrypt(params) {
  // 顺序排列key
  var keys = Object.keys(params).sort();
  var str = [];

  keys.forEach(function(p) {
    str.push(p + '=' + params[p]);
  });

  return str.join('&');
}

export default encrypt;
