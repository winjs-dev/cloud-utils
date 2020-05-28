var {expect} = require('chai');
var {getMonthOfDay} = require('../dist/cloud-utils');

describe('#getMonthOfDay() 获取某月有多少天', function () {
  it('getMonthOfDay(\'2018-1-29\') should return 31', function () {
    expect(getMonthOfDay('2018-1-29')).to.eql(31);
  });
});

