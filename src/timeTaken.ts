/**
 * 测试函数所花费的时间
 *
 * @since 1.2.1
 * @param {Function} callback - 要测试执行时间的函数
 * @returns {any} 返回callback函数的执行结果
 * @example
 *
 * timeTaken(() => Math.pow(2, 10));
 * // => 1024
 */
export function timeTaken(callback: Function): any {
  if (typeof callback !== 'function') throw new Error('callback 必须为可执行的函数');
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');

  return r;
}
