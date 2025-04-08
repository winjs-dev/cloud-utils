/**
 * 是否为有效的用户名
 * @description 4到16位（字母，数字，下划线，减号）
 * @param val - 待验证的用户名字符串
 * @param minLength - 最小长度，默认为4
 * @param maxLength - 最大长度，默认为16
 * @returns 返回布尔值，表示是否为有效的用户名
 * @example
 * isValidUserName('xiaohua_qq'); // => true
 * isValidUserName('ab', 3, 10); // => false (长度不足)
 * isValidUserName('invalid*name'); // => false (包含非法字符)
 */
export function isValidUserName(val: string, minLength: number = 4, maxLength: number = 16): boolean {
  const reg = new RegExp(`^[a-zA-Z0-9_-]{${minLength},${maxLength}}$`);
  return reg.test(val);
}
