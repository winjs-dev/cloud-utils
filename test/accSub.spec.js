var {expect} = require('chai');
var {accSub} = require('../dist/cloud-utils');

describe('#accSub() 减法函数，用来得到精确的减法结果', function () {
  it('accSub(0.3 - 0.2) should return 0.1', function () {
    expect(accSub(0.3, 0.2)).to.eql('0.1');
  });
});
