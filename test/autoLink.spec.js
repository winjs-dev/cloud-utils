var {expect} = require('chai');
var {autoLink} = require('../dist/cloud-utils');

describe('#autoLink() 将文本转换成 a 标签', function () {
  it('autoLink({text: \'测试连接http://www.baidu.com\'}) should return <a href="http://www.baidu.com">http://www.baidu.com</a>', function () {
    expect(autoLink({text: '测试连接http://www.baidu.com'})).to.eql('测试连接<a href="http://www.baidu.com">http://www.baidu.com</a>');
  });
});



