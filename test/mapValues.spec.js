var {expect} = require('chai');
var {mapValues} = require('../dist/cloud-utils');

describe('#mapValues() 根据提供函数返回的值映射一个新对象', function () {
  it('mapValues({\n' +
    '      fred: { user: \'fred\', age: 40 },\n' +
    '      pebbles: { user: \'pebbles\', age: 1 }\n' +
    '    }, (u) => u.age) should return { fred: 40, pebbles: 1 }', function () {
    const users = {
      fred: { user: 'fred', age: 40 },
      pebbles: { user: 'pebbles', age: 1 }
    };
    expect(mapValues(users, u => u.age)).to.eql({ fred: 40, pebbles: 1 });
  });
});

