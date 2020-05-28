var {expect} = require('chai');
var {getDayOfYearWeek} = require('../dist/cloud-utils');

describe('#getDayOfYearWeek() 获取某个日期在这一年的第几周', function () {
  it('getDayOfYearWeek(\'2014-01-10\') should return 2', function () {
    expect(getDayOfYearWeek('2014-01-10')).to.eql(2);
  });
});


