var {expect} = require('chai');
var {get} = require('../dist/cloud-utils');

describe('#get() 从对象中检索给定选择器指示的一组属性', function () {
  it('get', function () {
    var obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };
    expect(get(obj, 'selector.to.val', 'target[0]', 'target[2].a')).to.eql(['val to select', 1, 'test']);
  });
});


