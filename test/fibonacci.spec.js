var {expect} = require('chai');
var {fibonacci} = require('../dist/cloud-utils');

describe('#fibonacci() 斐波那契数组生成器', function () {
  it('fibonacci(5) should return [0, 1, 1, 2, 3]', function () {
    var ret = [0, 1, 1, 2, 3];

    expect(fibonacci(5)).to.eql(ret);
  });
});

