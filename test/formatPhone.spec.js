var {expect} = require('chai');
var {formatPhone} = require('../dist/cloud-utils');

describe('#formatPhone() 手机号码中间部分替换成指定符号', function () {
  it('formatPhone(\'13888888888\') should return \'138****8888\'', function () {
    var ret = '138****8888';
    expect(formatPhone('13888888888')).to.eql(ret);
  });
  it('formatPhone(13888888888, \'-\') should throw an exception', function () {
    var badFn = function () {
      formatPhone(13888888888, '-');
    };
    expect(badFn).to.throw('数据类型必须是 string');
  });
});

