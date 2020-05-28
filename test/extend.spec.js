var {expect} = require('chai');
var {extend} = require('../dist/cloud-utils');

describe('#extend() 将from所有的键值对都添加到to上面去，返回to', function () {
  it('extend({mobile: \'13888888888\', nickname: \'liwb\'}, {nickname: \'cklwb\'})', function () {
    var from = {mobile: '13888888888', nickname: 'liwb'};
    var to = {nickname: 'cklwb'};
    var ret = {nickname: 'liwb', mobile: '13888888888'};

    expect(extend(to, from)).to.eql(ret);
  });
});


