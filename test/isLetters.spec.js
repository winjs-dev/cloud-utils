var {expect} = require('chai');
var {isLetters} = require('../dist/cloud-utils');

describe('#isLetters() 是否为英文字母', function () {
  it('isLetters(\'a\') should return true', function () {
    expect(isLetters('a')).to.be.ok;
  });

  it('isLetters(\'2001\') should return false', function () {
    expect(isLetters('2001')).to.not.be.ok;
  });
});

