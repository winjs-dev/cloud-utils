var {expect} = require('chai');
var {compareVersion} = require('../dist/cloud-utils');

describe('#compareVersion() 版本比较', function () {
  it('compareVersion(\'1.0.0\', \'1.0.1\') should return -1', function () {
    expect(compareVersion('1.0.0', '1.0.1')).to.eql(-1);
  });

  it('compareVersion(\'6.02.002\', \'6.02.001\') should return 0', function () {
    expect(compareVersion('6.02.002', '6.02.002')).to.eql(0);
  });

  it('compareVersion(\'6.02.002\', \'6.02\') should return 1', function () {
    expect(compareVersion('6.02.002', '6.02')).to.eql(1);
  });
});

