var {expect} = require('chai');
var {inAlipay} = require('../dist/cloud-utils');

describe('#inAlipay() 是否为支付宝内核', function () {
  it('inAlipay() should return false', function () {
    expect(inAlipay()).to.not.be.ok;
  });
});
