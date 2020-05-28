/**
 * 是否为有效的银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)）
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidBankNo('6234567890');
 * // => true
 *
 * isValidBankNo('6222026006705354217');
 * // => true
 */
function isValidBankNo(val) {
  const reg = /^[1-9]\d{9,29}$/;

  return reg.test(val);
}

export default isValidBankNo;
