var {expect} = require('chai');
var {isEmptyObject} = require('../dist/cloud-utils');

describe('#isEmptyObject() 是否为空对象', function () {
  it('isEmptyObject({}) should return true', function () {
    expect(isEmptyObject({})).to.be.ok;
  });

  it('isEmptyObject({a: \'1\', b: \'2\'}) should return false', function () {
    expect(isEmptyObject({a: '1', b: '2'})).to.not.be.ok;
  });
});

