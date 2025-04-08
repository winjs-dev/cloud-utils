/**
 * 是否为有效的迅雷链接
 * @param val - 待验证的迅雷链接字符串
 * @returns 返回布尔值，表示是否为有效的迅雷链接
 * @example
 * isValidThunder('thunder://QUEsICdtYWduZXQ6P3h0PXVybjpidGloOjBCQTE0RTUxRkUwNjU1RjE0Qzc4NjE4RjY4NDY0QjZFNTEyNjcyOUMnWlo='); // => true
 * isValidThunder('http://example.com'); // => false
 */
export default function isValidThunder(val: string): boolean {
  const reg = /^thunderx?:\/\/[a-zA-Z\d]+=$/;
  return reg.test(val);
}