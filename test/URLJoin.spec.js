let { expect } = require('chai');
let { URLJoin } = require('../dist/cloud-utils');

describe('URLJoin() Joins all given URL segments together, then normalizes the resulting URL', function () {
  it('URLJoin(\'http://www.google.com\', \'a\', \'/b/cd\', \'?foo=123\', \'?bar=foo\') should return http://www.google.com/a/b/cd?foo=123&bar=foo', function () {
    expect(URLJoin('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo')).to.eql('http://www.google.com/a/b/cd?foo=123&bar=foo');
  });
});
