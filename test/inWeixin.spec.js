var {expect} = require('chai');
var {inWeixin} = require('../dist/cloud-utils');

describe('#inWeixin() 是否为微信内核', function () {
  it('inWeixin() should return false', function () {
    expect(inWeixin()).to.not.be.ok;
  });
});

