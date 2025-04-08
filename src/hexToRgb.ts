/**
 * Hex 转换为 Rgb
 *
 * @since 1.2.0
 * @param {string} hex - 十六进制颜色值
 * @returns {{r: number, g: number, b: number}} RGB颜色对象
 * @example
 *
 * hexToRgb("#0033ff").g;
 * // => 51
 */
export function hexToRgb(hex: string): {r: number, g: number, b: number} {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : {
    r: 0,
    g: 0,
    b: 0
  };
}