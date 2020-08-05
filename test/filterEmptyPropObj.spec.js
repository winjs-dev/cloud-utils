var {expect} = require('chai');
var {filterEmptyPropObj} = require('../dist/cloud-utils');

describe('#filterEmptyPropObj() 过滤对象中为空的属性', function () {
  var obj = {name: 'foo', sex: ''};
  var ret = {name: 'foo'};
  it('filterEmptyPropObj({}) should return {name: \'foo\'}}', function () {
    expect(filterEmptyPropObj(obj)).to.eql(ret);
  });
});

