/**
 * rgbToHex
 * @Author: liwb (lwbhtml@163.com)
 * @Date: 2025-04-09 11:16
 * @LastEditTime: 2025-04-09 11:16
 * @Description: rgbToHex
 */
/**
 * RGB 转换为 Hex
 * @description 将RGB颜色值转换为十六进制格式
 * @since 1.2.0
 * @param {number} r - 红色值 (0-255)
 * @param {number} g - 绿色值 (0-255)
 * @param {number} b - 蓝色值 (0-255)
 * @returns {string} 十六进制颜色值 (如 #000000)
 * @throws {TypeError} 当输入参数不是数字时抛出
 * @throws {RangeError} 当RGB值不在0-255范围内时抛出
 * @example
 * rgbToHex(0, 0, 0); // => '#000000'
 * rgbToHex(255, 255, 255); // => '#ffffff'
 */
export function rgbToHex(r: number, g: number, b: number): string {
  if (typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number') {
    throw new TypeError('RGB参数必须是数字类型');
  }

  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
    throw new RangeError('RGB值必须在0-255范围内');
  }

  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toLowerCase();
}
