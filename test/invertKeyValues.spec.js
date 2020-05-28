var {expect} = require('chai');
var {invertKeyValues} = require('../dist/cloud-utils');

describe('#invertKeyValues() 反转对象的键值对', function () {
  it('invertKeyValues({ name: \'John\', age: 20 }) should return { 20: \'age\', John: \'name\' }', function () {
    expect(invertKeyValues({name: 'John', age: 20})).to.eql({20: 'age', John: 'name'});
  });
});


