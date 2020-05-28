var {expect} = require('chai');
var {isLeapYear} = require('../dist/cloud-utils');

describe('#isLeapYear() 是否为闰年', function () {
  it('isLeapYear(2000) should return true', function () {
    expect(isLeapYear(2000)).to.be.ok;
  });

  it('isLeapYear(2001) should return false', function () {
    expect(isLeapYear(2001)).to.not.be.ok;
  });

  it('isLeapYear(\'abc\') should throw an exception', function () {
    var badFn = function () {
      isLeapYear('abc');
    };
    expect(badFn).to.throw(TypeError, '数据类型必须是 number');
  });
});


