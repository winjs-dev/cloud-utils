var {expect} = require('chai');
var {hexToRgb} = require('../dist/cloud-utils');

describe('#hexToRgb() Hex 转换为 Rgb', function () {
  it('hexToRgb(\'#0033ff\').g should return 51', function () {
    expect(hexToRgb('#0033ff').g).to.eql(51);
  });
});



