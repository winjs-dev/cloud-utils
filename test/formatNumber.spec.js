var {expect} = require('chai');
var {formatNumber} = require('../dist/cloud-utils');

describe('#formatNumber() 格式化数字、金额、千分位、保留几位小数、舍入舍去', function () {
  it('formatNumber(2, 2, \'.\', \',\') should return \'2.00\'', function () {
    var ret = '2.00';
    expect(formatNumber(2, 2, '.', ',')).to.eql(ret);
  });
});


