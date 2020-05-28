var {expect} = require('chai');
var {last} = require('../dist/cloud-utils');

describe('#last() 获取数组的最后一项', function () {
  it('last([\'1\',\'2\',\'3\']) should return \'3\'', function () {
    expect(last(['1','2','3'])).to.eql('3');
  });
});

