/**
 * 返回指定长度的天数集合
 * 摘自：https://segmentfault.com/a/1190000013041329
 *
 * @param  {time} 时间
 * @param  {len} 长度
 * @param  {direction} 方向：  1: 前几天;  2: 后几天;  3:前后几天  默认 3
 * @return {Array} 数组
 * @example
 *
 * getDays('2018-1-29', 6, 1)
 * // => ["2018-1-26", "2018-1-27", "2018-1-28", "2018-1-29", "2018-1-30", "2018-1-31", "2018-2-1"]
 */
function getDays(time, len, direction) {
  var tt = new Date(time);
  var getDay = function (day) {
    var t = new Date(time);
    t.setDate(t.getDate() + day);
    var m = t.getMonth() + 1;
    return t.getFullYear() + '-' + m + '-' + t.getDate();
  }
  var arr = [];
  if (direction === 1) {
    for (let i = 1; i <= len; i++) {
      arr.unshift(getDay(-i));
    }
  } else if (direction === 2) {
    for (let i = 1; i <= len; i++) {
      arr.push(getDay(i));
    }
  } else {
    for (let i = 1; i <= len; i++) {
      arr.unshift(getDay(-i));
    }
    arr.push(tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate())
    for (let i = 1; i <= len; i++) {
      arr.push(getDay(i));
    }
  }
  return direction === 1 ? arr.concat([tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()]) :
    direction === 2 ? [tt.getFullYear() + '-' + (tt.getMonth() + 1) + '-' + tt.getDate()].concat(arr) : arr;
}

export default getDays;
