var {expect} = require('chai');
var {isDigit} = require('../dist/cloud-utils');

describe('#isDigit() 是否为数字', function () {
  it('isDigit(\'123\') should return true', function () {
    expect(isDigit('123')).to.be.ok;
  });

  it('isDigit(\'bac\') should return false', function () {
    expect(isDigit('bac')).to.not.be.ok;
  });
});
