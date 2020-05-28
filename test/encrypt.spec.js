var {expect} = require('chai');
var {encrypt} = require('../dist/cloud-utils');

describe('#encrypt() 加密算法', function () {
  it('encrypt({ mobile: \'13888888888\', nickname: \'liwb\', appkey: \'ertfgdf345435568123454rtoiko5=\' }) should return \'APPKEY=ERTFGDF34543545=&MOBILE=15858264903&NICKNAME=LIWB\'', function () {
    var params = { mobile: '13888888888', nickname: 'liwb', appkey: 'ertfgdf345435568123454rtoiko5=' };
    var str = encrypt(params).toUpperCase();
    var ret = 'APPKEY=ERTFGDF345435568123454RTOIKO5=&MOBILE=13888888888&NICKNAME=LIWB';

    expect(str).to.eql(ret);
  });
});

