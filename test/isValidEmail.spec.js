var {expect} = require('chai');
var {isValidEmail} = require('../dist/cloud-utils');

describe('#isValidEmail() 是否为有效的邮箱地址', function () {
  it('isValidEmail(\'123456@qq.com\') should return true', function () {
    expect(isValidEmail('123456@qq.com')).to.be.ok;
  });

  it('isValidEmail(\'123456qq.com\') should return false', function () {
    expect(isValidEmail('123456qq.com')).to.not.be.ok;
  });
});


