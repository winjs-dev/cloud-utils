var {expect} = require('chai');
var {isHTML} = require('../dist/cloud-utils');

describe('#isHTML() 是否为 HTML 标签', function () {
  it('isHTML(\'<p>123</p>\') should return true', function () {
    expect(isHTML('<p>123</p>')).to.be.ok;
  });

  it('isHTML(\'2015-01-20 12:50:28\') should return false', function () {
    expect(isHTML('2015-01-20 12:50:28')).to.not.be.ok;
  });

});

