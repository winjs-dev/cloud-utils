/**
 * 过滤对象中为空的属性
 *
 * @param {Record<string, any>} obj - 需要过滤的对象
 * @returns {Record<string, any> | undefined} 过滤后的对象，如果输入不是对象则返回undefined
 * @example
 *
 * filterEmptyPropObj({name: 'foo', sex: ''});
 * // => {name: 'foo'}
 */
export function filterEmptyPropObj(obj: Record<string, any>): Record<string, any> | undefined {
  if (!(typeof obj === 'object' && obj !== null)) return undefined;

  const result = {...obj};
  for (const key in result) {
    if (result.hasOwnProperty(key) 
      && (result[key] == null || result[key] === '')) {
      delete result[key];
    }
  }
  return result;
}