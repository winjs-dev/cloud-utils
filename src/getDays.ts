/**
 * 返回指定长度的天数集合
 * 摘自：https://segmentfault.com/a/1190000013041329
 *
 * @param time - 日期字符串或Date对象
 * @param len - 天数长度
 * @param direction - 方向：1: 前几天; 2: 后几天; 3:前后几天 默认3
 * @returns 日期字符串数组
 * @example
 *
 * getDays('2018-1-29', 6, 1)
 * // => ["2018-1-26", "2018-1-27", "2018-1-28", "2018-1-29", "2018-1-30", "2018-1-31", "2018-2-1"]
 *
 * @example
 * getDays(new Date(2018, 0, 29), 3, 2)
 * // => ["2018-1-29", "2018-1-30", "2018-1-31", "2018-2-1"]
 */
export function getDays(time: string | Date, len: number, direction: 1 | 2 | 3 = 3): string[] {
  const tt = new Date(time);
  const getDay = (day: number): string => {
    const t = new Date(time);
    t.setDate(t.getDate() + day);
    const m = t.getMonth() + 1;
    return `${t.getFullYear()}-${m}-${t.getDate()}`;
  };

  const arr: string[] = [];
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
    arr.push(`${tt.getFullYear()}-${tt.getMonth() + 1}-${tt.getDate()}`);
    for (let i = 1; i <= len; i++) {
      arr.push(getDay(i));
    }
  }

  return direction === 1 
    ? arr.concat([`${tt.getFullYear()}-${tt.getMonth() + 1}-${tt.getDate()}`]) 
    : direction === 2 
      ? [`${tt.getFullYear()}-${tt.getMonth() + 1}-${tt.getDate()}`].concat(arr) 
      : arr;
}