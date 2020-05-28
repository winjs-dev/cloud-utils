var {expect} = require('chai');
var {isCardId} = require('../dist/cloud-utils');

describe('#isCardId() 是否为有效的身份证号', function () {
  it('isCardId(\'411423198807127834\') should return true', function () {
    expect(isCardId('411423198807127834')).to.be.ok;
  });

  it('isCardId(\'4114231988071278\') should return false', function () {
    expect(isCardId('4114231988071278')).to.not.be.ok;
  });
});
