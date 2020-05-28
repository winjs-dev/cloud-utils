var {expect} = require('chai');
var {changeMoneyToChinese} = require('../dist/cloud-utils');

describe('#changeMoneyToChinese() 数字金额大写转换', function () {
  it('changeMoneyToChinese(100111) should return "壹拾万零壹佰壹拾壹元整"', function () {
    expect(changeMoneyToChinese(100111)).to.eql('壹拾万零壹佰壹拾壹元整');
  });

  it('changeMoneyToChinese(7.52) should return "柒元伍角贰分"', function () {
    expect(changeMoneyToChinese(7.52)).to.eql('柒元伍角贰分');
  });

  it('changeMoneyToChinese(951434677682.00) should return "玖仟伍佰壹拾肆亿叁仟肆佰陆拾柒万柒仟陆佰捌拾贰元整"', function () {
    expect(changeMoneyToChinese(951434677682.00)).to.eql('玖仟伍佰壹拾肆亿叁仟肆佰陆拾柒万柒仟陆佰捌拾贰元整');
  });
});

