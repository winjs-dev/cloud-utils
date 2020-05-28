var {expect} = require('chai');
var {getIn} = require('../dist/cloud-utils');

describe('#getIn() 主动防御', function () {
  it('getIn', function () {
    var props = {
      user: {
        post: [{
          comments: 'test'
        }]
      }
    };
    expect(getIn(['user', 'post', 0, 'comments'], props)).to.eql('test');
  });
});


