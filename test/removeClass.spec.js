var {expect} = require('chai');
var {removeClass} = require('../dist/cloud-utils');

describe('#removeClass() Dom 操作，元素删除某个 class', function () {
  it('应该删除 class 到元素', function () {
    var element = {className: 'box flex'};

    removeClass(element, 'flex');

    expect(element.className).to.eql('box');
  });
});

