var {expect} = require('chai');
var {addChineseUnit} = require('../dist/cloud-utils');

describe('#addChineseUnit() 为数字加上单位：万或亿', function () {
  it('addChineseUnit(1000.01) should return 1000.01', function () {
    expect(addChineseUnit(1000.01)).to.eql(1000.01);
  });

  it('addChineseUnit(10000) should return 1万', function () {
    expect(addChineseUnit(10000)).to.eql('1万');
  });

  it('addChineseUnit(99000) should return 9.9万', function () {
    expect(addChineseUnit(99000)).to.eql('9.9万');
  });

  it('addChineseUnit(11111000) should return 1111.1万', function () {
    expect(addChineseUnit(11111000)).to.eql('1111.1万');
  });

  it('addChineseUnit(400000000000000000000000) should return 3999.99万亿亿', function () {
    expect(addChineseUnit(400000000000000000000000)).to.eql('3999.99万亿亿');
  });

  it('addChineseUnit(4000000000000000000000000) should return 4亿亿亿', function () {
    expect(addChineseUnit(4000000000000000000000000)).to.eql('4亿亿亿');
  });
});
