var {expect} = require('chai');
var {anagrams} = require('../dist/cloud-utils');

describe('#anagrams() 创建字谜', function () {
  it('anagrams(\'abc\') should return [\'abc\',\'acb\',\'bac\',\'bca\',\'cab\',\'cba\']', function () {
    expect(anagrams('abc')).to.eql(['abc','acb','bac','bca','cab','cba']);
  });
})
