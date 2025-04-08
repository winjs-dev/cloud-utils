import { toCamelCaseVar } from './toCamelCaseVar';
import { toUnderlineVar } from './toUnderlineVar';

type TransferType = 'hump' | 'line';
type RecordData = Array<any> | Record<string, any>;

/**
 * 数据对象key驼峰下划线格式相互转化
 * @param records - 原始对象，支持数组、key-value对象
 * @param type - hump-转驼峰 line-转下划线
 * @param keepOldField - true-保留原key,并转换 false-直接转下划线
 * @returns 转换后的对象
 * @example
 * // 驼峰转下划线
 * transferHumpUnderline({ userName: 'test' }, 'line');
 * // 下划线转驼峰
 * transferHumpUnderline({ user_name: 'test' }, 'hump');
 */
export function transferHumpUnderline(records: RecordData, type: TransferType = 'hump', keepOldField = false): RecordData {
  let hump = '';

  const formatTransferKey = (data: RecordData): void => {
    if (Array.isArray(data)) {
      data.forEach(item => formatTransferKey(item));
    } else if (typeof data === 'object' && data !== null) {
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
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
