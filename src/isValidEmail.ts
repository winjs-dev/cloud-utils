/**
 * 是否为有效的邮箱地址<br>
 * 名称允许汉字、字母、数字，域名只允许英文域名<br>
 * 中文如：杨元庆001Abc@lenovo.com.cn
 *
 * @param {string} val - 需要验证的邮箱字符串
 * @returns {boolean} - 返回验证结果
 * @example
 * isValidEmail('123456@qq.com');
 * // => true
 * @example
 * isValidEmail('杨元庆001Abc@lenovo.com.cn');
 * // => true
 */
export function isValidEmail(val: string): boolean {
  const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/i;

  return reg.test(val);
}
