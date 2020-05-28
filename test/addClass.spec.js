var {expect} = require('chai');
var {addClass} = require('../dist/cloud-utils');

describe('#addClass() 为元素添加某个 class', function () {
  it('应该添加 class 到元素', function () {
    var element = {className: 'box flex'};

    addClass(element, 'flex1');

    expect(element.className).to.eql('box flex flex1');
  });

  it('不应该添加已经存在的 class', function () {
    var element = {className: 'box flex'};

    addClass(element, 'flex');

    expect(element.className).to.eql('box flex');
  });
});
