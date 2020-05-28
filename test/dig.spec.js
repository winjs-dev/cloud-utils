var {expect} = require('chai');
var {dig} = require('../dist/cloud-utils');

describe('#dig() 基于给定的键返回嵌套JSON对象中的目标值', function () {
  it('dig', function () {
    var data = {
      level1: {
        level2: {
          level3: 'some data'
        }
      }
    };
    expect(dig(data, 'level3')).to.eql('some data');
    expect(dig(data, 'level4')).to.eql(undefined);
  });
});


