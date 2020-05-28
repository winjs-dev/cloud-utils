var {expect} = require('chai');
var {toNonExponential} = require('../dist/cloud-utils');

describe('#toNonExponential() 科学计数法转化为数值字符串形式', function () {
  it('toNonExponential(3.3e-7) should return \'0.00000033\'', function () {
    expect(toNonExponential(3.3e-7)).to.eql('0.00000033');
  });
  it('toNonExponential(3e-7) should return \'0.0000003\'', function () {
    expect(toNonExponential(3e-7)).to.eql('0.0000003');
  });
  it('toNonExponential(1.401e10) should return \'14010000000\'', function () {
    expect(toNonExponential(1.401e10)).to.eql('14010000000');
  });
  it('toNonExponential(0.0004) should return \'0.0004\'', function () {
    expect(toNonExponential(0.0004)).to.eql('0.0004');
  });
  it('toNonExponential(\'1.1\') should throw an exception', function () {
    var badFn = function () {
      toNonExponential('1.1')
    };
    expect(badFn).to.throw(TypeError, '数据类型必须是 number');
  });
});

