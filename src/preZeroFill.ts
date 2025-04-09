/**
 * preZeroFill
 * @Author: liwb (lwbhtml@163.com)
 * @Date: 2025-04-09 11:11
 * @LastEditTime: 2025-04-09 11:11
 * @Description: preZeroFill
 */
/**
 * 对整数进行前置补0
 * @description 将数字转换为指定位数的字符串，不足位数时在前面补0
 * @param {number} num - 需要补零的数值
 * @param {number} size - 补零后的总位数
 * @returns {string} 补零后的字符串
 * @throws {TypeError} 当输入参数不是数字时抛出
 * @example
 * preZeroFill(12, 3); // => "012"
 * preZeroFill(1234, 3); // => "1234" (超过位数不补零)
 */
export function preZeroFill(num: number, size: number): string {
  if (typeof num !== 'number' || typeof size !== 'number') {
    throw new TypeError('输入参数必须是数字类型');
  }

  if (num >= Math.pow(10, size)) {
    return num.toString();
  }

  const filledStr = Array(size + 1).join('0') + num;
  return filledStr.slice(-size);
}
