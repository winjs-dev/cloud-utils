var {expect} = require('chai');
var {formatMoney} = require('../dist/cloud-utils');

describe('#formatMoney() 用符号（默认为逗号）格式化金钱', function () {
  it('formatMoney(\'1234567890\') should return \'1,234,567,890\'', function () {
    var ret = '1,234,567,890';
    expect(formatMoney('1234567890')).to.eql(ret);
  });

  it('formatMoney(\'1234567890\', \'-\') should return \'1-234-567-890\'', function () {
    var ret = '1-234-567-890';
    expect(formatMoney('1234567890', '-')).to.eql(ret);
  });

  it('formatMoney(1234567890, \'-\') should throw an exception', function () {
    var badFn = function () {
      formatMoney(1234567890, '-')
    };
    expect(badFn).to.throw(TypeError, '数据类型必须是 string');
  });
});
