var {expect} = require('chai');
var {htmlEncode} = require('../dist/cloud-utils');

describe('#htmlEncode() html字符编码', function () {
  it('htmlEncode(\'<script>\') should return \'&lt;script&gt;\'', function () {
    expect(htmlEncode('<script>')).to.eql('&lt;script&gt;');
  });
});
