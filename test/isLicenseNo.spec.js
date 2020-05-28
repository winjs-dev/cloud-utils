var {expect} = require('chai');
var {isLicenseNo} = require('../dist/cloud-utils');

describe('#isLicenseNo() 是否为有效的车牌号码', function () {
  it('isLicenseNo(\'浙A12345\') should return true', function () {
    expect(isLicenseNo('浙A12345')).to.be.ok;
  });

  it('isLicenseNo(\'浙AB12345\') should return false', function () {
    expect(isLicenseNo('浙AB12345')).to.not.be.ok;
  });
});

