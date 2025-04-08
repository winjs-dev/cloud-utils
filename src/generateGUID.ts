/**
 * 生成GUID
 * 
 * @returns {string} 生成的GUID字符串
 * @example
 *
 * generateGUID();
 * // => '1e508ed6-6177-498d-c2a3-467f546db6ab'
 */
export function generateGUID(): string {
  let d = Date.now();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
  });

  return uuid;
}