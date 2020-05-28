var {expect} = require('chai');
var {isValidQQ} = require('../dist/cloud-utils');

describe('#isValidQQ() 是否为有效的 qq', function () {
  it('isValidQQ(\'814563410\') should return true', function () {
    expect(isValidQQ('814563410')).to.be.ok;
  });

  it('isValidQQ(\'814563410abc\') should return false', function () {
    expect(isValidQQ('814563410abc')).to.not.be.ok;
  });
});
