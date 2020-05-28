var {expect} = require('chai');
var {appendStockSuffix} = require('../dist/cloud-utils');

describe('#appendStockSuffix() 识别股票代码添加市场后缀', function () {
  it('appendStockSuffix(\'600570\') should return 600570.SS', function () {
    expect(appendStockSuffix('600570')).to.eql('600570.SS');
  });

  it('appendStockSuffix(\'002589\') should return 002589.SZ', function () {
    expect(appendStockSuffix('002589')).to.eql('002589.SZ');
  });
});

