/**
 * 返回指定长度的月份集合
 * 摘自：https://segmentfault.com/a/1190000013041329
 *
 * @param  {time} 时间
 * @param  {len} 长度
 * @param  {direction} 方向：  1: 前几个月;  2: 后几个月;  3:前后几个月  默认 3
 * @return {Array} 数组
 * @example
 *
 * getMonths('2018-1-29', 6, 1)
 * // => ["2018-1", "2017-12", "2017-11", "2017-10", "2017-9", "2017-8", "2017-7"]
 */
function getMonths(time, len, direction) {
  var mm = new Date(time).getMonth();
  var yy = new Date(time).getFullYear();
  var index = mm;
  direction = isNaN(direction) ? 3 : direction;

  var cutMonth = function (index) {
    if (index <= len && index >= -len) {
      return direction === 1 ? formatPre(index).concat(cutMonth(++index)) :
        direction === 2 ? formatNext(index).concat(cutMonth(++index)) : formatCurr(index).concat(cutMonth(++index));
    }
    return [];
  }
  var formatNext = function (i) {
    var y = Math.floor(i / 12);
    var m = i % 12;
    return [yy + y + '-' + (m + 1)];
  }
  var formatPre = function (i) {
    var y = Math.ceil(i / 12);
    var m = i % 12;
    m = m === 0 ? 12 : m;
    return [yy - y + '-' + (13 - m)];
  }
  var formatCurr = function (i) {
    var y = Math.floor(i / 12);
    var yNext = Math.ceil(i / 12);
    var m = i % 12;
    var mNext = m === 0 ? 12 : m;
    return [yy - yNext + '-' + (13 - mNext), yy + y + '-' + (m + 1)];
  }
  // 数组去重
  var unique = function (arr) {
    if (Array.hasOwnProperty('from')) {
      return Array.from(new Set(arr));
    } else {
      var n = {}, r = [];
      for (var i = 0; i < arr.length; i++) {
        if (!n[arr[i]]) {
          n[arr[i]] = true;
          r.push(arr[i]);
        }
      }
      return r;
    }
  }
  return direction !== 3 ? cutMonth(index) : unique(cutMonth(index).sort(function (t1, t2) {
    return new Date(t1).getTime() - new Date(t2).getTime();
  }));
}

export default getMonths;
