var {expect} = require('chai');
var {getDiffDay} = require('../dist/cloud-utils');

describe('#getDiffDay() 得到两个时间的时间差（返回天数）', function () {
  it('getDiffDay(1501516800000, 1504195200000) should return 31', function () {
    expect(getDiffDay(1501516800000, 1504195200000)).to.eql(31);
  });
});


