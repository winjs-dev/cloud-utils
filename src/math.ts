/*
 * @Author: liwb lwbhtml@163.com
 * @Date: 2025-04-18 13:54:44
 * @LastEditors: liwb lwbhtml@163.com
 * @LastEditTime: 2025-04-18 14:01:21
 * @FilePath: /cloud-utils/src/math.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 精确数学运算工具类
 * 使用 Decimal.js 库实现高精度计算。
 * 完整的浮点数运算支持
 * 精度可控
 * 支持科学计数法
 * 处理大数和小数都很可靠
 * 提供了丰富的数学运算方法
 * 适合金融计算等高精度场景
 */

import { Decimal } from 'decimal.js';

/**
 * 精确除法函数
 * @param {number|string} arg1 被除数
 * @param {number|string} arg2 除数
 * @param {number} [precision] 精度，默认保留10位小数
 * @returns {number} 商
 * @throws {Error} 当除数为0时抛出错误
 */
function mathDivide(arg1: number | string, arg2: number | string, precision: number = 10): number {
  if (arg2 === 0 || arg2 === '0') {
    throw new Error('除数不能为0');
  }

  try {
    const x = new Decimal(arg1);
    const y = new Decimal(arg2);
    return Number(x.dividedBy(y).toDecimalPlaces(precision));
  } catch (error) {
    throw new Error(`计算错误: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * 精确加法
 * @param {number|string} arg1 第一个数
 * @param {number|string} arg2 第二个数
 * @param {number} [precision] 精度，默认保留10位小数
 * @returns {number} 和
 */
function mathAdd(arg1: number | string, arg2: number | string, precision: number = 10): number {
  const x = new Decimal(arg1);
  const y = new Decimal(arg2);
  return Number(x.plus(y).toDecimalPlaces(precision));
}

/**
 * 精确减法
 * @param {number|string} arg1 被减数
 * @param {number|string} arg2 减数
 * @param {number} [precision] 精度，默认保留10位小数
 * @returns {number} 差
 */
function mathSubtract(arg1: number | string, arg2: number | string, precision: number = 10): number {
  const x = new Decimal(arg1);
  const y = new Decimal(arg2);
  return Number(x.minus(y).toDecimalPlaces(precision));
}

/**
 * 精确乘法
 * @param {number|string} arg1 第一个数
 * @param {number|string} arg2 第二个数
 * @param {number} [precision] 精度，默认保留10位小数
 * @returns {number} 积
 */
function mathMultiply(arg1: number | string, arg2: number | string, precision: number = 10): number {
  const x = new Decimal(arg1);
  const y = new Decimal(arg2);
  return Number(x.times(y).toDecimalPlaces(precision));
}

export {
  mathDivide,
  mathAdd,
  mathSubtract,
  mathMultiply
};

// 测试用例
// console.log(mathDivide(5.1, 3));        // 1.7
// console.log(mathDivide('5.1', '3'));    // 1.7
// console.log(mathAdd(0.1, 0.2));         // 0.3
// console.log(mathMultiply(0.1, 0.2));    // 0.02 