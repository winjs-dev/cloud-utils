var {expect} = require('chai');
var {trim} = require('../dist/cloud-utils');

describe('#trim() 清除空格', function () {
  it('trim(\' 123 \') should return 123', function () {
    expect(trim(' 123 ')).to.eql('123');
  });
});
