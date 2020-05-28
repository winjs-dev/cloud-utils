var {expect} = require('chai');
var {objectToPairs} = require('../dist/cloud-utils');

describe('#objectToPairs() 对象转化为键值对', function () {
  it('objectToPairs({ a: 1, b: 2 }) should return [[\'a\',1],[\'b\',2]]', function () {
    expect(objectToPairs({ a: 1, b: 2 })).to.eql([['a',1],['b',2]]);
  });
});


