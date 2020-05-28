var {expect} = require('chai');
var {accMul} = require('../dist/cloud-utils');

describe('#accMul() 乘法函数，用来得到精确的乘法结果', function () {
  it('accMul(0.222 * 0.3333) should return 0.0739926', function () {
    expect(accMul(0.222, 0.3333)).to.eql(0.0739926);
  });
});
