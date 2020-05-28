var {expect} = require('chai');
var {objectFromPairs} = require('../dist/cloud-utils');

describe('#objectFromPairs() 获取数组的最后一项', function () {
  it('objectFromPairs([[\'a\',1],[\'b\',2]]) should return {a: 1, b: 2}', function () {
    expect(objectFromPairs([['a',1],['b',2]])).to.eql({a: 1, b: 2});
  });
});

