/**
 * 将字节转换成友好格式，如Bytes，KB，MB
 *
 * @param {number} bytes 字节数
 * @returns {string} 格式化后的字符串
 * @example
 *
 * bytesToSize(10000)
 * // => '9.8 KB'
 */
export function bytesToSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB'];
  if (bytes === 0) return 'n/a';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString());
  return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
}