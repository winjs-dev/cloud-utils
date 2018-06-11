/**
 * RGB 转换为 Hex
 *
 * @since 1.2.0
 * @param r r值
 * @param g g值
 * @param b b值
 * @returns {string} Hex值
 * @example
 * rgbToHex(0,0,0);
 * // => #000000
 */
function rgbToHex(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export default rgbToHex;
