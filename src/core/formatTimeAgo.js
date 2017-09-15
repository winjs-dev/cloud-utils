/**
 * 将时间转化为几天前,几小时前，几分钟前
 *
 * @param {number} ms
 * @returns {*}
 * @example
 *
 * formatTimeAgo(1505232000000);
 * // => 1天前
 */
function formatTimeAgo(ms) {
  ms = parseInt(ms);

  var timeNow = Date.now();
  var diff = (timeNow - ms) / 1000;
  var date = new Date();
  var days = Math.round(diff / (24 * 60 * 60));
  var hours = Math.round(diff / (60 * 60));
  var minutes = Math.round(diff / 60);
  var second = Math.round(diff);

  if (days > 0 && days < 2) {
    return days + '天前';
  } else if (days <= 0 && hours > 0) {
    return hours + '小时前';
  } else if (hours <= 0 && minutes > 0) {
    return minutes + '分钟前';
  } else if (minutes <= 0 && second >= 0) {
    return '刚刚';
  } else {
    date.setTime(ms);

    return (date.getFullYear() + '-' + f(date.getMonth() + 1) + '-' + f(date.getDate()) + ' ' + f(date.getHours()) + ':' + f(date.getMinutes()));
  }

  function f(n) {
    return (n < 10) ? '0' + n : n;
  }
}

export default formatTimeAgo;
