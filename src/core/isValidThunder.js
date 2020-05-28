/**
 * 是否为有效的迅雷链接
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidThunder('thunder://QUEsICdtYWduZXQ6P3h0PXVybjpidGloOjBCQTE0RTUxRkUwNjU1RjE0Qzc4NjE4RjY4NDY0QjZFNTEyNjcyOUMnWlo=');
 * // => true
 */
function isValidThunder(val) {
  const reg = /^thunderx?:\/\/[a-zA-Z\d]+=$/;

  return reg.test(val);
}

export default isValidThunder;
