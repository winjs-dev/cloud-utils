/**
 * 斐波那契数组生成器
 * 创建一个特定长度的空数组，初始化前两个值（0和1）。使用Array.reduce（）向数组中添加值，后面的一个数等于前面两个数相加之和（前两个除外）。
 *
 * @since 1.2.1
 * @param num
 * @returns {*}
 * @example
 *
 * fibonacci(5);
 * // => [0,1,1,2,3]
 */
function fibonacci(num) {
  return Array(num).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);
}

export default fibonacci;
