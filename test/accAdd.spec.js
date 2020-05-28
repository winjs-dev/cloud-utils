var {expect} = require('chai');
var {accAdd} = require('../dist/cloud-utils');

describe('#accAdd() 加法函数，用来得到精确的加法结果', function () {
  it('accAdd(0.1 + 0.2) should return 0.3', function () {
    expect(accAdd(0.1, 0.2)).to.eql(0.3);
  });
});
