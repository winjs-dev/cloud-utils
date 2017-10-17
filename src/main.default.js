// 导出esm有问题
import accAdd from './core/accAdd';
import accDiv from './core/accDiv';
import accMul from './core/accMul';
import accSub from './core/accSub';
import addChineseUnit from './core/addChineseUnit';
import appendStockSuffix from './core/appendStockSuffix';
import encrypt from './core/encrypt';
import extend from './core/extend';
import formatBankCard from './core/formatBankCard';
import formatDate from './core/formatDate';
import formatTimeAgo from './core/formatTimeAgo';
import formatDateToTimeStamp from './core/formatDateToTimeStamp';
import formatMoney from './core/formatMoney';
import formatPhone from './core/formatPhone';
import formatCopyfilesPath from './core/formatCopyfilesPath';
import getLocationHrefParam from './core/getLocationHrefParam';
import getLocationSearchParam from './core/getLocationSearchParam';
import getUrlNames from './core/getUrlNames';
import generateGUID from './core/generateGUID';
import getRandomInt from './core/getRandomInt';
import htmlDecode from './core/htmlDecode';
import htmlEncode from './core/htmlEncode';
import inAlipay from './core/inAlipay';
import inWeixin from './core/inWeixin';
import isCardId from './core/isCardId';
import isDigit from './core/isDigit';
import isEmptyObject from './core/isEmptyObject';
import isLeapYear from './core/isLeapYear';
import isLetters from './core/isLetters';
import isLicenseNo from './core/isLicenseNo';
import isMobile from './core/isMobile';
import isValidDate from './core/isValidDate';
import isValidEmail from './core/isValidEmail';
import isValidPassword from './core/isValidPassword';
import isValidQQ from './core/isValidQQ';
import isValidURI from './core/isValidURI';
import isValidZipcode from './core/isValidZipcode';
import preZeroFill from './core/preZeroFill';
import bytesToSize from './core/bytesToSize';
import dataURLToBlob from './core/dataURLToBlob';
import getPixelRatio from './core/getPixelRatio';
import insertAtCaret from './core/insertAtCaret';
import getDevice from './core/getDevice';
import getBrowser from './core/getBrowser';
import getDiffDay from './core/getDiffDay';

const utils = {
  // 加密算法类
  encrypt,

  // 格式化类
  formatBankCard,
  formatMoney,
  formatPhone,

  // 浏览器地址相关参数
  getLocationHrefParam,
  getLocationSearchParam,
  getUrlNames,

  // 随机数类
  generateGUID,
  getRandomInt,

  // 转义字符
  htmlDecode,
  htmlEncode,

  // 内核、设备等，如微信，支付宝
  getDevice,
  getBrowser,
  inAlipay,
  inWeixin,

  // 验证类
  isCardId,
  isDigit,
  isEmptyObject,
  isLeapYear,
  isLetters,
  isLicenseNo,
  isMobile,
  isValidDate,
  isValidEmail,
  isValidPassword,
  isValidQQ,
  isValidURI,
  isValidZipcode,

  // 计算类或数学类
  accAdd,
  accDiv,
  accMul,
  accSub,
  preZeroFill,

  // 时间类
  formatDate,
  formatTimeAgo,
  formatDateToTimeStamp,
  getDiffDay,

  // 其他
  bytesToSize,
  dataURLToBlob,
  getPixelRatio,
  insertAtCaret,
  addChineseUnit,
  appendStockSuffix,
  extend,
  formatCopyfilesPath
};

utils.version = '__VERSION__';

export default utils;
