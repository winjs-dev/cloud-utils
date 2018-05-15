/**
 * 版本比较
 *
 * @param oldVersion 老版本
 * @param newVersion 新版本
 * @param containEqual 是否包含相等的情况
 * @returns {boolean} newVersion >[=] oldVersion
 * @example
 *
 * compareVersion('1.0.0', '1.0.1')
 */
function compareVersion(oldVersion, newVersion, containEqual) {
  if (typeof oldVersion !== 'string' || typeof newVersion !== 'string') {
    return false;
  }
  // 分割字符串为['1', '0', '1']格式
  var oldArray = oldVersion.split('.');
  var newArray = newVersion.split('.');
  var o, n;
  // 从左向右对比值，值相同则跳过，不同则返回不同的值
  while (o === n && newArray.length > 0) {
    o = oldArray.shift();
    n = newArray.shift();
  }
  // 返回不同值的比较结果
  if (containEqual) {
    return (n | 0) >= (o | 0);
  } else {
    return (n | 0) > (o | 0);
  }
}

export default compareVersion;
