/**
 * 柯里化一个 Promise 函数
 *
 * @param func
 * @returns {function(...[*]): Promise<any>}
 * @example
 *
 * const delay = promisify((d, cb) => setTimout(cb, d));
 * delay(200).then(() => console.log('Hi!'));
 * // => Promise resolves after 2s
 */
const promisify = (func) => (...args) =>
  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );

export default promisify;
