var {expect} = require('chai');
var {isChinese} = require('../dist/cloud-utils');

describe('#isChinese() 是否为中文', function () {
  it('isChinese(\'中文\') should return true', function () {
    expect(isChinese('中文')).to.be.ok;
  });

  it('isChinese(\'4114231988071278\') should return false', function () {
    expect(isChinese('4114231988071278')).to.not.be.ok;
  });
});
