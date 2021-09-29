var {expect} = require('chai');
var {toUnderlineVar} = require('../dist/cloud-utils');

describe('#toUnderlineVar() 小驼峰转换下划线', function () {
  it('toUnderlineVar(\'getAccountList\') should return \'get_account_list\'', function () {
    expect(toUnderlineVar('getAccountList')).to.eql('get_account_list');
  });
});





