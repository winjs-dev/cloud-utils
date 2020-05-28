var {expect} = require('chai');
var {formatBankCard} = require('../dist/cloud-utils');

describe('#formatBankCard() 格式化银行卡号', function () {
  it('formatBankCard(\'6225365271562822\') should return \'6225 3652 7156 2822\'', function () {
    var ret = '6225 3652 7156 2822';

    expect(formatBankCard('6225365271562822')).to.eql(ret);
  });
});
