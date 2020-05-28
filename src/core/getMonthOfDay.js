/**
 * 获取某月有多少天
 * 摘自：https://segmentfault.com/a/1190000013041329
 *
 * @param  {time} 时间
 * @return {number} 天数
 * @example
 *
 * getMonthOfDay('2018-1-29')
 * // => 31
 */
function getMonthOfDay(time) {
  var date = new Date(time);
  var year = date.getFullYear();
  var mouth = date.getMonth() + 1;
  var days;

  //当月份为二月时，根据闰年还是非闰年判断天数
  if (mouth == 2) {
    days = (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) || (year % 4 == 0 && year % 100 != 0) ? 28 : 29;
  } else if (mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
    //月份为：1,3,5,7,8,10,12 时，为大月.则天数为31；
    days = 31;
  } else {
    //其他月份，天数为：30.
    days = 30;
  }
  return days;
}

export default getMonthOfDay;
