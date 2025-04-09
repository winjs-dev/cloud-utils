/**
 * promisify
 * @Author: liwb (lwbhtml@163.com)
 * @Date: 2025-04-09 11:15
 * @LastEditTime: 2025-04-09 11:15
 * @Description: promisify
 */
/**
 * 将回调风格的函数转换为Promise风格
 * @description 将遵循Node.js回调风格(err, result)的函数转换为返回Promise的函数
 * @template T - 函数返回结果的类型
 * @param {Function} func - 需要转换的回调风格函数
 * @returns {(...args: any[]) => Promise<T>} 返回一个返回Promise的新函数
 * @throws {TypeError} 当输入参数不是函数时抛出
 * @example
 * const fsReadFile = promisify(fs.readFile);
 * fsReadFile('file.txt', 'utf8').then(console.log);
 */
export const promisify = <T = any>(func: (...args: any[]) => void): (...args: any[]) => Promise<T> => {
  if (typeof func !== 'function') {
    throw new TypeError('输入参数必须是函数');
  }

  return (...args: any[]) =>
    new Promise<T>((resolve, reject) => {
      func(...args, (err: any, result: T) => {
        err ? reject(err) : resolve(result);
      });
    });
};
