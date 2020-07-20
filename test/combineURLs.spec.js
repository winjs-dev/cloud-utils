let { expect } = require('chai');
let { combineURLs } = require('../dist/cloud-utils');

describe('combineURLs() 合并url参数', function () {
  it('combineURLs(http://127.0.0.1:8080/, /param1, /param2/, param3/) should return http://127.0.0.1:8080/param1/param2/param3/', function () {
    expect(combineURLs('http://127.0.0.1:8080/', '/param1', '/param2/', 'param3/')).to.eql('http://127.0.0.1:8080/param1/param2/param3/');
  });
});

describe('combineURLs() 合并url参数', function () {
  it('combineURLs(http://127.0.0.1:8080/, /param1, /param2/, param3) should return http://127.0.0.1:8080/param1/param2/param3', function () {
    expect(combineURLs('http://127.0.0.1:8080/', '/param1', '/param2/', 'param3')).to.eql('http://127.0.0.1:8080/param1/param2/param3');
  });
});

describe('combineURLs() 合并url参数', function () {
  it('combineURLs(http://127.0.0.1:8080/, /param1, /param2/, /param3/param4/) should return http://127.0.0.1:8080/param1/param2/param3/param4/', function () {
    expect(combineURLs('http://127.0.0.1:8080/', '/param1', '/param2/', '/param3/param4/')).to.eql('http://127.0.0.1:8080/param1/param2/param3/param4/');
  });
});
