var {expect} = require('chai');
var {toCamelCaseVar} = require('../dist/cloud-utils');

describe('#toCamelCaseVar() 中划线转换小驼峰', function () {
  it('toCamelCaseVar(\'get_account_list\') should return \'getAccountList\'', function () {
    expect(toCamelCaseVar('get_account_list')).to.eql('getAccountList');
  });
});





