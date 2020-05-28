var {expect} = require('chai');
var {rgbToHex} = require('../dist/cloud-utils');

describe('#rgbToHex() RGB 转换为 Hex', function () {
  it('rgbToHex(0, 0, 0) should return \'#000000\'', function () {
    expect(rgbToHex(0,0,0)).to.eql('#000000');
  });
});




