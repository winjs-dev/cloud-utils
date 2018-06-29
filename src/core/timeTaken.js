/**
 * 测试函数所花费的时间
 *
 * @since 1.2.1
 * @param callback
 * @returns {*}
 * @example
 *
 * timeTaken(() => Math.pow(2, 10));
 * // => 1024
 */
function timeTaken(callback) {
  if (typeof callback !== 'function') throw new Error('callback 必须为可执行的函数');
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');

  return r;
}

export default timeTaken;
