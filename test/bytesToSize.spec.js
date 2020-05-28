var {expect} = require('chai');
var {bytesToSize} = require('../dist/cloud-utils');

describe('#bytesToSize() 将字节转换成友好格式，如Bytes，KB，MB', function () {
  it('10000 should return 9.8 KB', function () {
    expect(bytesToSize('10000')).to.eql('9.8 KB');
  });

  it('0 should return n/a', function () {
    expect(bytesToSize(0)).to.eql('n/a');
  });
})

