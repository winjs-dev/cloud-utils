var {expect} = require('chai');
var {isMobile} = require('../dist/cloud-utils');

describe('#isMobile() 是否为有效的手机号', function () {
  it('isMobile(\'15898745678\') should return true', function () {
    expect(isMobile('15898745678')).to.be.ok;
  });

  it('isMobile(\'158987456789\') should return false', function () {
    expect(isMobile('158987456789')).to.not.be.ok;
  });
});


