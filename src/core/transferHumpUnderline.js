import toCamelCaseVar from './toCamelCaseVar';
import toUnderlineVar from './toUnderlineVar';

/**
 * 数据对象key驼峰下划线格式相互转化
 *
 * @param records 原始对象，支持-数组、key-value对象、字符串
 * @param type hump-转驼峰 line-转下划线
 * @param keepOldField true-保留原key,并转换 false-直接转下划线
 * @returns {*}
 */
function transferHumpUnderline (records, type = 'hump', keepOldField = false) {
  let hump = '';
  // 转换对象中的每一个键值为驼峰的递归
  const formatTransferKey = (data) => {
    if (data instanceof Array) {
      data.forEach(item => formatTransferKey(item));
    } else if (data instanceof Object) {
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          hump = type === 'hump' ? toCamelCaseVar(key) : toUnderlineVar(key);
          data[hump] = data[key];
          if (key !== hump && !keepOldField) {
            delete data[key];
          }
        }
        formatTransferKey(data[hump]);
      }
    }
  };

  formatTransferKey(records);

  return records;
}

export default transferHumpUnderline;
