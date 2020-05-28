var {expect} = require('chai');
var {preZeroFill} = require('../dist/cloud-utils');

describe('#preZeroFill() 对整数进行前置补0', function () {
  it('preZeroFill(12, 3) should return \'012\'', function () {
    expect(preZeroFill(12, 3)).to.eql('012');
  });
});


