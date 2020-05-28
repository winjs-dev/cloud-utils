var {expect} = require('chai');
var {isEmpty} = require('../dist/cloud-utils');

describe('#isEmpty() 是否为空', function () {
  it('isEmpty', function () {
    expect(isEmpty([])).to.eql(true);
    expect(isEmpty({})).to.eql(true);
    expect(isEmpty('')).to.eql(true);
    expect(isEmpty([1, 2])).to.eql(false);
    expect(isEmpty({a: 1, b: 2})).to.eql(false);
    expect(isEmpty('text')).to.eql(false);
    expect(isEmpty(123)).to.eql(true);
    expect(isEmpty(true)).to.eql(true);
  });
});


