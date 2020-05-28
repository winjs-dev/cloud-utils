var {expect} = require('chai');
var {getMonths} = require('../dist/cloud-utils');

describe('#getMonths() 返回指定长度的月份集合', function () {
  it('getMonths(\'2018-1-29\', 6, 1) should return true', function () {
    var ret = ['2018-1', '2017-12', '2017-11', '2017-10', '2017-9', '2017-8', '2017-7'];
    expect(getMonths('2018-1-29', 6, 1)).to.eql(ret);
  });
});
