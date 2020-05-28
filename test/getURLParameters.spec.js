var {expect} = require('chai');
var {getURLParameters} = require('../dist/cloud-utils');

describe('#getURLParameters() 获取网址参数', function () {
  it('getURLParameters(\'http://url.com/page?name=Adam&surname=Smith\') should return {name: \'Adam\', surname: \'Smith\'}', function () {
    expect(getURLParameters('http://url.com/page?name=Adam&surname=Smith')).to.eql({name: 'Adam', surname: 'Smith'});
  });
  it('getURLParameters(123) should throw an exception', function () {
    var badFn = function () {
      getURLParameters(123)
    };
    expect(badFn).to.throw(TypeError, '数据类型必须是 string');
  });
});

