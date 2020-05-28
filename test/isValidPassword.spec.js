var {expect} = require('chai');
var {isValidPassword} = require('../dist/cloud-utils');

describe('#isValidPassword() 是否为有效的密码(6-16位字母加数字组合，不能包含空格)', function () {
  it('isValidPassword(\'a23456abc\') should return true', function () {
    expect(isValidPassword('a23456abc')).to.be.ok;
  });

  it('isValidPassword(\'123456qq.com\') should return false', function () {
    expect(isValidPassword('123456qq.com')).to.not.be.ok;
  });
});



