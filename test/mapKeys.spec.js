var {expect} = require('chai');
var {mapKeys} = require('../dist/cloud-utils');

describe('#mapKeys() 根据提供函数生成的键生成一个新对象', function () {
  it('mapKeys({ a: 1, b: 2 }, (val, key) => key + val) should return { a1: 1, b2: 2 }', function () {
    expect(mapKeys({ a: 1, b: 2 }, (val, key) => key + val)).to.eql({ a1: 1, b2: 2 });
  });
});
