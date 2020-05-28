
var {expect} = require('chai');
var {isValidURI} = require('../dist/cloud-utils');

describe('#isValidURI() 是否为有效的 url', function () {
  it('isValidURI(\'https://github.com/lodash\') should return true', function () {
    expect(isValidURI('https://github.com/lodash')).to.be.ok;
  });

  it('isValidURI(\'814563410abc\') should return false', function () {
    expect(isValidURI('814563410abc')).to.not.be.ok;
  });
});

