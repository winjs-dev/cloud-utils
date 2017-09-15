/**
 * 减法函数，用来得到精确的减法结果<br>
 * javascript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的减法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1减去arg2的精确结果
 * @example
 *
 * accDiv(0.3, 0.2)
 * // => 0.1
 */
function accSub(arg1, arg2) {
  var r1;
  var r2;
  var m;
  var n;

  try {
    r1 = arg1.toString().split('.')[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split('.')[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2)); // last modify by deeka //动态控制精度长度
  n = (r1 >= r2) ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

export default accSub;
