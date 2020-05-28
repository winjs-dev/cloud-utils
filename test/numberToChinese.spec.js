var {expect} = require('chai');
var {numberToChinese} = require('../dist/cloud-utils');

describe('#numberToChinese() 数字转换成中文大写数字', function () {
  it('numberToChinese(10001010) should return "一千万一千一十"', function () {
    expect(numberToChinese(10001010)).to.eql('一千万一千一十');
  });
});

