var {expect} = require('chai');
var {accDiv} = require('../dist/cloud-utils');

describe('#accDiv() 除法函数，用来得到精确的除法结果', function () {
  it('accDiv(0.2 / 0.3) should return 0.6666666666666666', function () {
    expect(accDiv(0.2, 0.3)).to.eql(0.6666666666666666);
  });
});
