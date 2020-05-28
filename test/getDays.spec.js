var {expect} = require('chai');
var {getDays} = require('../dist/cloud-utils');

describe('#getDays() 返回指定长度的月份集合', function () {
  it('getDays(\'2018-1-29\', 6, 1) should return [\'2018-1-23\', \'2018-1-24\', \'2018-1-25\', \'2018-1-26\', \'2018-1-27\', \'2018-1-28\', \'2018-1-29\']', function () {
    var ret = ['2018-1-23', '2018-1-24', '2018-1-25', '2018-1-26', '2018-1-27', '2018-1-28', '2018-1-29'];
    expect(getDays('2018-1-29', 6, 1)).to.eql(ret);
  });
});
