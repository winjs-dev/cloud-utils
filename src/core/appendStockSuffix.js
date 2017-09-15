/**
 * 自动为股票代码添加市场后缀
 *
 * @param {string} stock 股票代码
 * @returns {string}
 * @example
 *
 * appendStockSuffix('600570')
 * // => '600570.SS'
 */
function appendStockSuffix(stock) {
  var regSS = /^(((700|730|900|600|601|580)[\d]{3})|60[\d]{4})$/;
  var regSZ = /^(((000|002|200|300|080|031)[\d]{3}|00[\d]{4}))$/;

  if (regSS.test(stock)) {
    stock = stock + '.SS';
  } else if (regSZ.test(stock)) {
    stock = stock + '.SZ';
  }
  return stock;
}

export default appendStockSuffix;
