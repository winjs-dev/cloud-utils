var {expect} = require('chai');
var {capitalizeEveryWord} = require('../dist/cloud-utils');

describe('#capitalizeEveryWord() 将每个单词的首字母进行大写转换', function () {
  it('hello world! should return Hello World!', function () {
    expect(capitalizeEveryWord('hello world!')).to.eql('Hello World!');
  });
});

