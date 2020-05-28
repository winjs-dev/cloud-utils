var {expect} = require('chai');
var {isValidZipcode} = require('../dist/cloud-utils');

describe('#isValidZipcode() 是否为有效的邮政编码', function () {
  it('isValidZipcode(\'330561\') should return true', function () {
    expect(isValidZipcode('330561')).to.be.ok;
  });

  it('isValidZipcode(\'814563410abc\') should return false', function () {
    expect(isValidZipcode('814563410abc')).to.not.be.ok;
  });
});

