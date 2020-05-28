var {expect} = require('chai');
var {htmlDecode} = require('../dist/cloud-utils');

describe('#htmlDecode() html字符解码', function () {
  it('htmlDecode(\'&lt;script&gt;\') should return \'<script>\'', function () {
    expect(htmlDecode('&lt;script&gt;')).to.eql('<script>');
  });
});


