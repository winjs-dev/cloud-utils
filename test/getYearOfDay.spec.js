var {expect} = require('chai');
var {getYearOfDay} = require('../dist/cloud-utils');

describe('#getYearOfDay() 获取某年有多少天', function () {
  it('getYearOfDay(\'2014-01-10\') should return 365', function () {
    expect(getYearOfDay('2014-01-10')).to.eql(365);
  });
});



