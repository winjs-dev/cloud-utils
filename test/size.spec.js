var {expect} = require('chai');
var {size} = require('../dist/cloud-utils');

describe('#size() 获取数组，对象或字符串的大小', function () {
  it('size([1, 2, 3, 4, 5]) should return 5', function () {
    expect(size([1, 2, 3, 4, 5])).to.eql(5);
  });
  it('size({ one: 1, two: 2, three: 3 }) should return 3', function () {
    expect(size({ one: 1, two: 2, three: 3 })).to.eql(3);
  });
});



