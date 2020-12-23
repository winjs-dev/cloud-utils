/**
 * 加法函数，用来得到精确的加法结果<br>
 * javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1加上arg2的精确结果
 * @example
 *
 * accAdd(0.1, 0.2)
 * // => 0.3
 */
export declare function accAdd(arg1: number, arg2: number): number;

/**
 * 除法函数，用来得到精确的除法结果<br>
 * javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1除以arg2的精确结果
 * @example
 *
 * accDiv(0.2, 0.3)
 * // => 0.6666666666666666
 */
export declare function accDiv(arg1: number, arg2: number): number;

/**
 * 乘法函数，用来得到精确的乘法结果<br>
 * javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1乘以arg2的精确结果
 * @example
 *
 * accMul(0.222, 0.3333)
 * // => 0.0739926
 */
export declare function accMul(arg1: number, arg2: number): number;

/**
 * 减法函数，用来得到精确的减法结果<br>
 * javascript的减法结果会有误差，在两个浮点数相减的时候会比较明显。这个函数返回较为精确的减法结果。
 *
 * @param {number} arg1
 * @param {number} arg2
 * @returns {number} arg1减去arg2的精确结果
 * @example
 *
 * accSub(0.3, 0.2)
 * // => 0.1
 */
export declare function accSub(arg1: number, arg2: number): number;

/**
 * 为数字加上单位：万或亿
 *
 * @param {number} number 输入数字.
 * @param {number} decimalDigit 返回的小数点后最多的位数，默认为 2
 * @return {string} 加上单位后的数字（计算结果有时会有精度问题）
 * @example
 *
 * addChineseUnit(1000.01)
 * // => 1000.01
 *
 * addChineseUnit(10000)
 * // => 1万
 *
 * addChineseUnit(99000)
 * // => 9.9万
 *
 * addChineseUnit(566000)
 * // => 56.6万
 *
 * addChineseUnit(5660000)
 * // => 566万
 *
 * addChineseUnit(44440000)
 * // => 4444万
 *
 * addChineseUnit(11111000)
 * // => 1111.1万
 *
 * addChineseUnit(444400000)
 * // => 4.44亿
 *
 * addChineseUnit(400000000000000000000000)
 * // => 3999.99万亿亿
 *
 * addChineseUnit(4000000000000000000000000)
 * // => 4亿亿亿
 */
export declare function addChineseUnit(number: number, decimalDigit: number): string;

/**
 * dom操作，元素添加某个class
 *
 * @since 1.1.5
 * @param el HTML元素
 * @param cls css类名
 * @example
 *
 * <div class="box flex"></div>
 * addClass(document.querySelector('.box'), 'flex1');
 * // => <div class="box flex flex1"></div>
 */
export declare function addClass(el: HTMLElement, cls: string): void;

/**
 * Anagrams of string（带有重复项）
 * 使用递归。对于给定字符串中的每个字母，为字母创建字谜。使用map（）将字母与每部分字谜组合，然后使用reduce（）将所有字谜组合到一个数组中，最基本情况是字符串长度等于2或1。
 *
 * @since 1.2.1
 * @param str
 * @returns {*}
 * @example
 *
 * anagrams('abc');
 * // => ['abc','acb','bac','bca','cab','cba']
 */
export declare function anagrams(str: string): Array<string>;

/**
 * 识别股票代码添加市场后缀
 *
 * @param {string} stock 股票代码
 * @returns {string}
 * @example
 *
 * appendStockSuffix('600570')
 * // => '600570.SS'
 */
export declare function appendStockSuffix(stock: string): string;

/**
 * 将字节转换成友好格式，如Bytes，KB，MB
 *
 * @param {string} bytes
 * @returns {*}
 * @example
 *
 * bytesToSize(10000)
 * // => 9.8 KB
 */
export declare function bytesToSize(bytes: string): string;

/**
 * 大写每个单词的首字母
 *
 * @since 1.2.1
 * @param str
 * @returns {string|*|void|XML}
 * @example
 *
 * capitalizeEveryWord('hello world!');
 * // => 'Hello World!'
 */
export declare function capitalizeEveryWord(str: string): string;

/**
 * 数字金额大写转换
 *
 * @since 1.2.5
 * @param n
 * @returns {string}
 * @example
 *
 * changeMoneyToChinese(100111);
 * => "壹拾万零壹佰壹拾壹元整"
 *
 * changeMoneyToChinese(7.52);
 * => "柒元伍角贰分"
 *
 * changeMoneyToChinese(951434677682.00);
 * => "玖仟伍佰壹拾肆亿叁仟肆佰陆拾柒万柒仟陆佰捌拾贰元整"
 */
export declare function changeMoneyToChinese(n: number): string;

/**
 * 版本比较
 *
 * {@link https://github.com/omichelsen/compare-versions}
 * @param v1 老版本
 * @param v2 新版本
 * @returns {number} v1 > v2 => 1, v1 < v2 => -1, v1 === v2 => 0
 * @example
 *
 * compareVersion('10.1.8', '10.0.4');
 * // => 1
 * compareVersion('10.0.1', '10.0.1');
 * // => 0
 * compareVersion('10.1.1', '10.2.2');
 * // => -1
 */
export declare function compareVersion(v1: string, v2: string): boolean;

/**
 * base64转blob
 *
 * @param {string} dataURL
 * @returns {*}
 * @example
 *
 * const URI = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUvPjwvZGVmcz48cGF0aCBkPSJNOTU5LjQzNiAyNDMuNUwzNzcuNDEzIDg3MC4yNyA2NC4wMiA0NjcuMzQ0bDExNC43MjctOTcuOTMgMTk4LjY2NiAyMDcuMDYgNDkyLjQ4Mi00MjIuNTEgODkuNTQgODkuNTM3em0wIDAiIGZpbGw9IiM0M2E5ZjEiLz48L3N2Zz4=';
 *
 * dataURLToBlob(URI);
 * // => Blob {size: 248, type: "image/svg+xml"}
 */
export declare function dataURLToBlob(dataURL: string): any;

/**
 * 深层克隆对象
 *
 * @param obj {object}
 * @returns {*}
 * @example
 *
 * const a = { foo: 'bar', obj: { a: 1, b: 2 } };
 * const b = deepClone(a);
 * // => a !== b, a.obj !== b.obj
 */
export declare function deepClone(obj: object): any;

/**
 * 深层映射对象键
 *
 * @param obj
 * @param fn
 * @returns {{}}
 * @example
 *
 * const obj = {
  foo: '1',
  nested: {
    child: {
      withArray: [
        {
          grandChild: ['hello']
        }
      ]
    }
  }
};

 const upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());

 // =>
 {
  "FOO":"1",
  "NESTED":{
    "CHILD":{
      "WITHARRAY":[
        {
          "GRANDCHILD":[ 'hello' ]
        }
      ]
    }
  }
}
 */
export declare function deepMapKeys(obj: object | Array<string>, fn: () => any): any;

/**
 * 基于给定的键返回嵌套JSON对象中的目标值
 *
 * {@link https://30secondsofcode.org/object#dig}
 * @param obj
 * @param target
 * @returns {any}
 * @example
 *
 * const data = {
 *  level1: {
 *    level2: {
 *      level3: 'some data'
 *    }
 *  }
 * };
 * dig(data, 'level3');
 * // => 'some data'
 * dig(data, 'level4');
 * // => undefined
 */
export declare function dig(obj: object, target: object): object;

/**
 * 加密算法
 * 1.所有入参加入集合M，参数名做key, 值做value
 * 2.提供的密钥1（字段名appid）与密钥2（字段名secret）两项，以及当前时间戳（字段名time)也加入集合M,
 * 3.将集合M内非空参数值的参数按照参数名ASCII码从小到大排序（字典序）
 * 4.集合M所有值拼接成字符串，转化成UTF-8编码格式的字节数组, 最后需要取MD5码（signature摘要值）
 *
 * @param {object} params
 * @example
 *
 * const params = { mobile: '15858264900', nickname: 'liwb', appkey: 'ertfgdf345435568123454rtoiko5=' };
 *
 * md5(encrypt(params).toUpperCase());
 * // => md5('APPKEY=ERTFGDF34543545=&MOBILE=15858264903&NICKNAME=LIWB')
 */
export declare function encrypt(params: object): string;

/**
 * 将from所有的键值对都添加到to上面去，返回to
 *
 * @param {Object} to
 * @param {Object} from
 * @returns {*}
 * @example
 *
 * const from = {mobile: '15858264903', nickname: 'liwb'};
 * const to = {nickname: 'cklwb'};
 *
 * extend(to, from);
 * // => {nickname: "liwb", mobile: "15858264903"}
 */
export declare function extend(to: object, from: object): object;

/**
 * 斐波那契数组生成器
 * 创建一个特定长度的空数组，初始化前两个值（0和1）。使用Array.reduce（）向数组中添加值，后面的一个数等于前面两个数相加之和（前两个除外）。
 *
 * @since 1.2.1
 * @param num
 * @returns {*}
 * @example
 *
 * fibonacci(5);
 * // => [0,1,1,2,3]
 */
export declare function fibonacci(num: number): Array<number>;

/**
 * 格式化银行卡<br>
 * 用户在输入银行卡号时，需要以4位4位的形式显示，就是每隔4位加个空格，方便用户校对输入的银行卡是否正确<br>
 * **注：**一般数据库里面存的都是不带格式的原始数据，所以提交的时候记得过滤下空格再提交哦。毕竟格式化这种算是表现层，前端展示的时候处理下就好，业务逻辑什么用到的卡号可不是格式化后的呢。<br>
 * 还原`val.replace(/\s/g, '');`
 *
 * @param {string} val
 * @returns {*}
 * @example
 *
 * formatBankCard('6225365271562822');
 * // => 6225 3652 7156 2822
 */
export declare function formatBankCard(val: string): string;

/**
 * Date 转化为指定格式的String<br>
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)可以用 1-2 个占位符<br>
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *
 * @param {string | number} date string支持形式：20160126 12:00:00，2016-01-26 12:00:00，2016.01.26 12:00:00，20160126，2016-01-26 12:00:00.0
 * @param {string} fmt
 * @returns {string}
 * @example
 *
 * formatDate(Date.now(), 'yyyy-MM-dd hh:mm:ss.S');
 * // => 2006-07-02 08:09:04.423
 *
 * formatDate(Date.now(), 'yyyy-MM-dd E HH:mm:ss');
 * // => 2009-03-10 二 20:09:04
 *
 * formatDate(Date.now(), 'yyyy-MM-dd EE hh:mm:ss');
 * // => 2009-03-10 周二 08:09:04
 *
 * formatDate(Date.now(), 'yyyy-MM-dd EEE hh:mm:ss');
 * // => 2009-03-10 星期二 08:09:04
 *
 * formatDate(Date.now(), 'yyyy-M-d h:m:s.S')
 * // => 2006-7-2 8:9:4.18
 */
export declare function formatDate(date: any, fmt?: string): string;

/**
 * 用符号（默认为逗号）格式化金钱
 *
 * @param {string} val
 * @param {string} symbol 默认`,`
 * @returns {string|*|XML|void}
 * @example
 *
 * formatMoney('1234567890');
 * // => 1,234,567,890
 */
export declare function formatMoney(val: string, symbol: string): string;

/**
 * 格式化数字、金额、千分位、保留几位小数、舍入舍去
 *
 * @since 1.0.7
 * @param number 要格式化的数字
 * @param decimals 保留几位小数
 * @param decPoint 小数点符号
 * @param thousandsSep 千分位符号
 * @param roundTag 舍入参数，默认 'ceil' 向上取,'floor'向下取,'round' 四舍五入
 * @returns {XML|void|*|string}
 * @example
 *
 * formatNumber(2, 2, '.', ',');
 * // => 2.00
 */
export declare function formatNumber(number: number, decimals?: number, decPoint?: string, thousandsSep?: string, roundTag?: 'ceil' | 'floor' | 'round'): number;

/**
 * 手机号码中间部分替换成指定符号
 *
 * @param {string} phone
 * @param {string} symbol 默认为`*`
 * @returns {string|*|XML|void}
 * @example
 *
 * formatPhone('15858264903');
 * // => 158****4903
 */
export declare function formatPhone(phone: string, symbol: string): string;

/**
 * 将时间转化为几天前,几小时前，几分钟前
 *
 * @param {number} ms
 * @returns {*}
 * @example
 *
 * formatTimeAgo(1505232000000);
 * // => 1天前
 */
export declare function formatTimeAgo(ms: number): string;

/**
 * 生成guid
 *
 * @returns {string}
 * @example
 *
 * generateGUID();
 * // => 1e508ed6-6177-498d-c2a3-467f546db6ab
 */
export declare function generateGUID(): string;

/**
 * 从对象中检索给定选择器指示的一组属性
 *
 * {@link https://30secondsofcode.org/object#get}
 * @param from
 * @param selectors
 * @returns {string[]}
 * @example
 *
 * const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };
 * get(obj, 'selector.to.val', 'target[0]', 'target[2].a');
 * // =>  ['val to select', 1, 'test']
 */
export declare function get(from: object, selectors: object): Array<any>;

/**
 * 获取浏览器的类型和版本号
 *
 * @returns {{type: string, version: string}}
 * @example
 *
 * getBrowser();
 * // => {type: "chrome", version: "60.0.3112.101"}
 */
export declare function getBrowser(): object;

/**
 * 获取某个日期是当年中的第几天
 *
 * @since 1.2.4
 * @param time
 * @returns {number}
 * @example
 *
 * getDayOfYear('2014-01-10')
 * => 10
 */
export declare function getDayOfYear(time: string): number;

/**
 * 获取某个日期在这一年的第几周
 *
 * @since 1.2.4
 * @param time
 * @returns {number}
 * @example
 *
 * getDayOfYearWeek('2014-01-10')
 * => 2
 */
export declare function getDayOfYearWeek(time: string): number;

/**
 * 返回指定长度的天数集合
 * 摘自：https://segmentfault.com/a/1190000013041329
 *
 * @param time
 * @param len
 * @param direction
 * @return {Array} 数组
 * @example
 *
 * getDays('2018-1-29', 6, 1)
 * // => ["2018-1-26", "2018-1-27", "2018-1-28", "2018-1-29", "2018-1-30", "2018-1-31", "2018-2-1"]
 */
export declare function getDays(time: string, len: number, direction: number): Array<string>;

interface IDeviceInfo {
  androidChrome: boolean,
  ipad: boolean,
  iphone: boolean,
  android: boolean,
  ios: boolean,
  os: 'ios' | 'android',
  osVersion: string,
  webView: null
}

/**
 * 获取移动设备信息，如是否是iOS，android等
 *
 * @returns {{}}
 * @example
 *
 * getDevice();
 * // => {"androidChrome":false,"ipad":false,"iphone":true,"android":false,"ios":true,"os":"ios","osVersion":"9.1","webView":null}
 */
export declare function getDevice(): IDeviceInfo;

/**
 * 得到两个时间的时间差（返回天数）
 *
 * @since 1.0.7
 * @param {number} startDay 开始时间戳
 * @param {number} endDay   结束时间戳
 * @returns {number}
 * @example
 *
 * getDiffDay(1501516800000, 1504195200000);
 * // => 31
 */
export declare function getDiffDay(startDay: number, endDay: number): number;

/**
 * 主动防御
 * 对于我们操作的数据，尤其是由 API 接口返回的，时常会有一个很复杂的深层嵌套的数据结构。为了代码的健壮性，很多时候需要对每一层访问都作空值判断，就像这样：
 props.user &&
 props.user.posts &&
 props.user.posts[0] &&
 props.user.posts[0].comments &&
 props.user.posts[0].comments[0]
 代码看起来相当不美观，因此提供了一个非常简洁明了的原生的方式。
 *
 * @param p 属性列表
 * @param o 对象
 * @returns {*} 如果正常访问到，则返回对应的值，否则返回 null。
 * @example
 *
 * var props = {
 *  user: {
 *    post: [{
 *      comments: 'test'
 *    }]
 *  }
 * };
 * getIn(['user', 'post', 0, 'comments'], props);
 * // => test
 */
export declare function getIn(p: Array<string | number>, o: any): number | string;

/**
 * 获取location.href参数
 *
 * @param {string} name
 * @returns {*}
 * @example
 *
 * window.location.href = 'http://www.baidu.com/?a=1&b=2';
 *
 * getLocationHrefParam('a');
 * // => 1
 */
export declare function getLocationHrefParam(name: string): string;

/**
 * 获取location.search的参数
 *
 * @param {string} name
 * @returns {*}
 * @example
 *
 * window.location.href = 'http://www.baidu.com/?a=1&b=2';
 *
 * getLocationSearchParam('a');
 * // => 1
 */
export declare function getLocationSearchParam(name: string): string;

/**
 * 获取某月有多少天
 * 摘自：https://segmentfault.com/a/1190000013041329
 *
 * @param time
 * @return {number} 天数
 * @example
 *
 * getMonthOfDay('2018-1-29')
 * // => 31
 */
export declare function getMonthOfDay(time: string): number;

/**
 * 返回指定长度的月份集合
 * 摘自：https://segmentfault.com/a/1190000013041329
 *
 * @param time
 * @param len
 * @param direction
 * @return {Array} 数组
 * @example
 *
 * getMonths('2018-1-29', 6, 1)
 * // => ["2018-1", "2017-12", "2017-11", "2017-10", "2017-9", "2017-8", "2017-7"]
 */
export declare function getMonths(time: string, len: number, direction: number): Array<string>;

/**
 * 获取设备像素比
 *
 * @returns {number}
 * @example
 *
 * // window.navigator.appVersion(5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1)
 * getPixelRatio();
 * // => 2
 */
export declare function getPixelRatio(): number;

/**
 * 获取滚动位置
 * 如果已定义，请使用pageXOffset和pageYOffset，否则使用scrollLeft和scrollTop，可以省略el来使用window的默认值。
 *
 * @since 1.2.1
 * @param el
 * @returns {{x: Number, y: Number}}
 * @example
 *
 * getScrollPos();
 * // => {x: 0, y: 200}
 */
export declare function getScrollPos(el: HTMLElement): any;

/**
 * 根据参数获取对应的值
 *
 * @param {string} name
 * @returns {*}
 * @example
 *
 * // window.location.href: 'http://www.baidu.com/?a=1&b=2&state=broker:aaaa1111ccc;tenant:asdfasdf;view_tag:2;
 * getUrlNames('state');
 * // => {broker: "aaaa1111ccc", tenant: "asdfasdf", view_tag: "2"}
 */
export declare function getUrlNames(name: string): any;

/**
 * 获取网址参数
 * @param {string} url
 * @returns {{}} 返回包含当前URL参数的对象。
 * @example
 *
 * getURLParameters('http://url.com/page?name=Adam&surname=Smith');
 * => // {name: 'Adam', surname: 'Smith'}
 */
export declare function getURLParameters(url: string): any;

/**
 * 获取某年有多少天
 *
 * @since 1.2.4
 * @param time
 * @returns {number}
 * @example
 *
 * getYearOfDay('2014')
 * => 365
 */
export declare function getYearOfDay(time: string): number;

/**
 * Dom 操作，元素是包含某个 class
 *
 * @since 1.1.5
 * @param el HTML元素
 * @param cls css类名
 * @returns {boolean}
 * @example
 *
 * <div class="box flex"></div>
 * hasClass(document.querySelector('.box'), 'flex');
 * // => true
 */
export declare function hasClass(el: HTMLElement, cls: string): boolean;

/**
 * Hex 转换为 Rgb
 *
 * @since 1.2.0
 * @param hex
 * @returns {*}
 * @example
 *
 * hexToRgb("#0033ff").g;
 * // => 51
 */
export declare function hexToRgb(hex: string): any;

/**
 * html字符解码
 *
 * @param {string} str
 * @returns {string}
 * @example
 *
 * htmlDecode('&lt;script&gt;');
 * // => <script>
 */
export declare function htmlDecode(str: string): string;

/**
 * html字符编码
 *
 * @param {string} str
 * @returns {string}
 * @example
 *
 * htmlEncode('<script>');
 * // => &lt;script&gt;
 */
export declare function htmlEncode(str: string): string;

/**
 * 是否是支付宝内核
 *
 * @returns {boolean}
 * @example
 *
 * inAlipay();
 * // => false
 */
export declare function inAlipay(): boolean;

/**
 * 将文本插入到文本区域的光标位置<br>
 * _应用场景：_如在评论框里，在光标位置里插入emoji等
 *
 * @param {object} dom对象
 * @param {string} str
 * @example
 *
 * <textarea name="textarea" rows="10" cols="50">你好世界~</textarea>
 *
 * const editText = document.querySelector('#editText');
 *
 * insertText(editText, 'hello world');
 * // =>
 */
export declare function insertAtCaret(dom: any, str: string): void;

/**
 * 反转对象的键值对
 * 而不会改变它。使用 Object.keys() 和 Array.reduce() 来反转对象的键值对。
 *
 * @param obj
 * @returns {{}}
 * @example
 *
 * invertKeyValues({ name: 'John', age: 20 });
 * // => { 20: 'age', John: 'name' }
 */
export declare function invertKeyValues(obj: object): object;

/**
 * 是否是微信内核
 *
 * @returns {boolean}
 * @example
 *
 * inWeixin();
 * // => false
 */
export declare function inWeixin(): boolean;

/**
 * 是否为有效的身份证号
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isCardId('411423198807127834');
 * // => true
 */
export declare function isCardId(val: string): boolean;

/**
 * 是否为中文
 *
 * @since 1.2.4
 * @param val
 * @returns {boolean}
 * @example
 *
 * isChinese('中文');
 * // => true
 */
export declare function isChinese(val: string): boolean;

/**
 * 是否为数字
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isDigit('abc');
 * // => false
 */
export declare function isDigit(val: string): boolean;

/**
 * 是否为空
 * 如果a值是空对象，集合，没有可枚举属性或任何不被视为集合的类型，则返回true。
 *
 * {@link https://30secondsofcode.org/type#isempty}
 * @param val
 * @returns {boolean}
 * @example
 *
 * isEmpty([]);
 * // => true
 * isEmpty({});
 * // => true
 * isEmpty('');
 * // => true
 * isEmpty([1, 2]);
 * // => false
 * isEmpty({ a: 1, b: 2 });
 * // => false
 * isEmpty('text');
 * // => false
 * isEmpty(123);
 * // => true - type is not considered a collection
 * isEmpty(true);
 * // => true - type is not considered a collection
 */
export declare function isEmpty(val: any): boolean;

/**
 * 是否为空对象
 *
 * @param val
 * @returns {boolean}
 * @example
 *
 * isEmptyObject({});
 * // => true
 */
export declare function isEmptyObject(val: any): boolean;

/**
 * 是否为 HTML 标签
 *
 * @since 1.2.4
 * @param {string} str
 * @returns {boolean}
 * @example
 *
 * isHTML('<p>123</p>');
 * // => true
 */
export declare function isHTML(str: string): boolean;

/**
 * 是否为闰年
 *
 * @param {number} val
 * @returns {boolean}
 * @example
 *
 * isLeapYear(2000);
 * // => true
 */
export declare function isLeapYear(val: number): boolean;

/**
 * 是否为字母
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isLetters('1234');
 * // => false
 */
export declare function isLetters(val: string): boolean;

/**
 * 是否为有效的车牌号码
 *
 * 1.常规车牌号：仅允许以汉字开头，后面可录入六个字符，由大写英文字母和阿拉伯数字组成。如：粤B12345；<br>
 * 2.武警车牌：允许前两位为大写英文字母，后面可录入七个字符，由大写英文字母和阿拉伯数字组成，其中第三位可录汉字也可录大写英文字母及阿拉伯数字，如：WJ01警0081、WJ0112345。<br>
 * 3.最后一个为汉字的车牌：允许以汉字开头，后面可录入六个字符，前五位字符，由大写英文字母和阿拉伯数字组成，而最后一个字符为汉字，汉字包括“挂”、“学”、“警”、“军”、“港”、“澳”。<br>如：粤Z1234港。
 * 4.新军车牌：以两位为大写英文字母开头，后面以5位阿拉伯数字组成。如：BA12345。<br>
 * 5.黑龙江车牌存在08或38开头的情况。<br>
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isLicenseNo('浙A12345');
 * // => true
 */
export declare function isLicenseNo(val: string): boolean;

/**
 * 是否为 Light OS(容器)
 *
 * @example
 *
 * isLightOS();
 * // => true
 */
export declare function isLightOS(): boolean;

/**
 * 是否为有效的手机号
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isMobile('15898745678');
 * // => true
 */
export declare function isMobile(val: string): boolean;

/**
 * 是否为有效的日期格式<br>
 * 格式为 yyyy-mm-dd 或 yyyy-mm-dd HH:mm:ss
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidDate('2015-01-20');
 * // => true
 */
export declare function isValidDate(val: string): boolean;

/**
 * 是否为有效的邮箱地址<br>
 * 名称允许汉字、字母、数字，域名只允许英文域名<br>
 * 中文如：杨元庆001Abc@lenovo.com.cn
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidEmail('123456@qq.com');
 * // => true
 */
export declare function isValidEmail(val: string): boolean;

/**
 * 是否为有效的密码(6-16位字母加数字组合，不能包含空格)
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidPassword('a23456abc');
 * // => true
 */
export declare function isValidPassword(val: string): boolean;

/**
 * 是否为有效的 qq
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidQQ('814563410');
 * // => true
 */
export declare function isValidQQ(val: string): boolean;

/**
 * 是否为有效的 url<br>
 *
 * 支持类型:<br>
 * http(s)://(username:password@)(www.)domain.(com/co.uk)(/...)<br>
 * (s)ftp://(username:password@)domain.com/...<br>
 * git://(username:password@)domain.com/...<br>
 * irc(6/s)://host:port/... //<br>
 * afp over TCP/IP: afp://[<user>@]<host>[:<port>][/[<path>]]<br>
 * telnet://<user>:<password>@<host>[:<port>/]<br>
 * smb://[<user>@]<host>[:<port>][/[<path>]][?<param1>=<value1>[;<param2>=<value2>]]<br>
 *
 * @param {string} url
 * @returns {*}
 * @example
 *
 * isValidURI('https://github.com/lodash');
 * // => true
 */
export declare function isValidURI(url: string): boolean;

/**
 * 是否为有效的邮政编码
 *
 * @param val
 * @returns {boolean}
 * @example
 *
 * isValidZipcode('330561');
 * // => true
 */
export declare function isValidZipcode(val: string): boolean;

/**
 * 获取数组的最后一项
 *
 * @since 1.2.1
 * @param array
 * @returns {boolean}
 * @example
 *
 * last(['1,2,3']);
 * // => '3';
 */
export declare function last(array: Array<any>): any;

/**
 * 根据提供函数生成的键生成一个新对象
 * 使用 Object.keys(obj) 来迭代对象的键。 使用 Array.reduce() 创建一个具有相同值的新对象，并使用 fn 来映射键。
 *
 * @param obj
 * @param fn
 * @returns {{}}
 * @example
 *
 * mapKeys({ a: 1, b: 2 }, (val, key) => key + val);
 * // => { a1: 1, b2: 2 }
 */
export declare function mapKeys(obj: object, fn: any): any;

/**
 * 根据提供函数返回的值映射一个新对象
 *
 * @param obj
 * @param fn
 * @returns {{}}
 * @example
 *
 * const users = {
  fred: { user: 'fred', age: 40 },
  pebbles: { user: 'pebbles', age: 1 }
};
 * mapValues(users, u => u.age);
 * // => { fred: 40, pebbles: 1 }
 */
export declare function mapValues(obj: object, fn: any): any;

/**
 * 从两个或多个对象的组合中创建一个新对象
 *
 * {@link https://30secondsofcode.org/object#merge}
 * @param objs
 * @returns {*}
 * @example
 *
 * merge(
 {
  a: [{ x: 2 }, { y: 4 }],
  b: 1
},
 {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo'
});
 * // => { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
 */
export declare function merge(objs: any): any;

/**
 * 兼容 lightOS 离线包及 tzyj 在线
 * @param method {string}
 * @param params {string}
 * @param cb     {function}
 * @description
 * 分为两种情况<br>
 * 在线及离线<br>
 * 在线的情况下，H5应用是运行在 tzyj 的webview里，目前 navigator.userAgent 并没有 lightos，所以只能用tzyj自身注入的对象 window.winner<br>
 * 离线包情况下，H5应用是运行在 light 的容器里。因此就可以利用 light 本身提供的SDK，即使 tzyj 自身封装扩展的方法，如获取自选股等，是基于 light 的容器，也需要改造
 *
 */
export declare function nativeJSBridge({method: string, params: object, cb: any}): any;

/**
 * 当 H5 页面完全展示之前需要和 native 先进行交互，此用来控制时序。只有 App 调用了 ready(deviceready,hsAppReady) 方法后，表示 App 端已经准备完毕，已注入了相关 js 对象。防止 App 还没注入 js 对象方法，H5 过早调用 App 提供的方法
 * 兼容 lightOS 离线包及 tzyj 在线
 * @param cb  {function}
 * @param type {string} 可选，默认为 light
 */
export declare function nativeReady(cb: any, type: string): any;

/**
 * 数字转换成中文的大写数字
 *
 * @since 1.2.5
 * @param num
 * @returns {string}
 * @example
 *
 * numberToChinese(10001010);
 * => "一千万一千一十"
 */
export declare function numberToChinese(num: number | string): string;

/**
 * 数组转换为键值对的对象
 *
 * @since 1.2.1
 * @param array
 * @returns {*}
 * @example
 *
 * objectFromPairs([['a',1],['b',2]]);
 * // => {a: 1, b: 2}
 */
export declare function objectFromPairs(array: Array<any>): any;

/**
 * 对象转化为键值对
 * 使用 Object.keys() 和 Array.map() 遍历对象的键并生成一个包含键值对的数组。
 *
 * @param obj
 * @returns {any[][]}
 * @example
 *
 * objectToPairs({ a: 1, b: 2 });
 * // => [['a',1],['b',2]]
 */
export declare function objectToPairs(obj: any): Array<any>;

/**
 * 返回对象的白名单属性
 *
 * {@link https://github.com/tj/node-only}
 * @param obj
 * @param keys
 * @returns {*}
 * @example
 *
 * var obj = {
  name: 'tobi',
  last: 'holowaychuk',
  email: 'tobi@learnboost.com',
  _id: '12345'
};

 * var user = only(obj, 'name last email');
 * // => {
      name: 'tobi',
      last: 'holowaychuk',
      email: 'tobi@learnboost.com'
    }
 */
export declare function only(obj: any, keys: string): Array<any>;

/**
 * 图片压缩
 * @param  {string}   file [压缩文件]
 * @param  {object}   obj [压缩参数]
 * @param  {function} cb   [回调函数]
 * @return {string}        [返回压缩前和压缩后的格式]
 */
export declare function photoCompress(file: string, obj: any, cb: any): string;

/**
 * 对整数进行前置补0
 *
 * @param {number} num 数值
 * @param {number} size 要补0的位数
 * @returns {string}
 * @example
 *
 * preZeroFill(12, 3);
 * // => 012
 */
export declare function preZeroFill(num: number, size: number): string;

/**
 * 柯里化一个 Promise 函数
 *
 * @param func
 * @returns {function(...[*]): Promise<any>}
 * @example
 *
 * const delay = promisify((d, cb) => setTimout(cb, d));
 * delay(200).then(() => console.log('Hi!'));
 * // => Promise resolves after 2s
 */
export declare function promisify(func: any): any;

/**
 * Dom 操作，元素删除某个 class
 *
 * @since 1.1.5
 * @param el HTML元素
 * @param cls css类名
 * @example
 *
 * <div class="box flex"></div>
 * removeClass(document.querySelector('.box'), 'flex');
 * // => <div class="box"></div>
 */
export declare function removeClass(el: HTMLElement, cls: string): void;

/**
 * RGB 转换为 Hex
 *
 * @since 1.2.0
 * @param r r值
 * @param g g值
 * @param b b值
 * @returns {string} Hex值
 * @example
 * rgbToHex(0,0,0);
 * // => #000000
 */
export declare function rgbToHex(r: number, g: number, b: number): string;

/**
 * 滚动到顶部
 * 使用document.documentElement.scrollTop或document.body.scrollTop获取到顶部的距离。从顶部滚动一小部分距离。
 使用window.requestAnimationFrame（）来滚动。
 *
 * @since 1.2.1
 * @example
 *
 * scrollToTop();
 */
export declare function scrollToTop(): void;

/**
 * 获取数组，对象或字符串的大小。
 * Get type of val (array, object or string). Use length property for arrays. Use length or size value if available or number of keys for objects. Use size of a Blob object created from val for strings.

 获取 val （array，object 或 string）的类型。 对于数组使用 length 属性。 对于对象，使用 length 或 size 如果可用的话，或者对象的键的数量。 对于字符串，使用根据 val 创建的Blob对象 的 size。

 通过 split('') 将字符串拆分成字符数组并返回其长度。

 * @param val
 * @returns {*}
 * @example
 *
 * size([1, 2, 3, 4, 5]);
 * // =>  5
 *
 * size('size');
 * // => 4
 *
 * size({ one: 1, two: 2, three: 3 });
 * // => 3
 */
export declare function size(val: any): number;

/**
 * 测试函数所花费的时间
 *
 * @since 1.2.1
 * @param callback
 * @returns {*}
 * @example
 *
 * timeTaken(() => Math.pow(2, 10));
 * // => 1024
 */
export declare function timeTaken(callback: () => void): any;

/**
 * 中划线转换小驼峰
 *
 * @since 1.1.7
 * @param {string} variable
 * @returns {string}
 * @example
 *
 * toCamelCaseVar('get_account_list');
 * // => getAccountList
 */
export declare function toCamelCaseVar(variable: string): string;

/**
 * 科学计数法转化为数值字符串形式
 *
 * @param {number} num
 * @returns {string}
 * @example
 *
 * toNonExponential(3.3e-7);
 * => // "0.00000033"
 *
 * toNonExponential(3e-7);
 * => // "0.0000003"
 *
 * toNonExponential(1.401e10);
 * => // "14010000000"
 *
 * toNonExponential(0.0004);
 * => // "0.0004"
 */
export declare function toNonExponential(num: number): string;

/**
 * toZhCN 把字符串转成以分为单位的整数。
 *
 * @param {number|string} num 金额
 * @returns {string} 中文大写的金额, 标准会计格式
 * @example
 *
 * toZhCN(500.3);
 * // => 伍佰元叁角整
 */
export declare function toZhCN(num: string): string;

/**
 * 清除空格
 *
 * @param str
 * @param type 1-所有空格  2-前后空格  3-前空格 4-后空格
 * @returns {*}
 * @example
 *
 * trim(' 123 ');
 * // => 123
 */
export declare function trim(str: string, type: number): string;

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURLs The relative URL
 * @returns {string} The combined URL
 */
export declare function combineURLs(baseURL: string, relativeURLs: string): string;

/**
 * 是否是微博内核
 *
 * @returns {boolean}
 * @example
 *
 * inWeibo();
 * // => false
 */
export declare function inWeibo(): boolean;

/**
 * 动态加载 script
 *
 * @param src
 * @param callback
 * @example
 *
 * dynamicLoadScript('https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js', () => {
 *   console.log('加载成功');
 * })
 * // => 加载成功
 *
 */
export declare function dynamicLoadScript(src, callback): void

/**
 * 是否为有效的微信号
 * 6至20位，以字母开头，字母，数字，减号，下划线
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidWechatID('liwenbo_2010');
 * // => true
 */
export declare function isValidWechatID(val: string): boolean

/**
 * 是否为有效的16进制颜色
 * 6至20位，以字母开头，字母，数字，减号，下划线
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidHexadecimalColor('#f00');
 * // => true
 *
 * isValidHexadecimalColor('#fe9de8');
 * // => true
 */
export declare function isValidHexadecimalColor(val: string): boolean

/**
 * 是否为有效的IP v4
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidIPV4('172.16.0.0');
 * // => true
 *
 * isValidIPV4('127.0.0.0');
 * // => true
 *
 */
export declare function isValidIPV4(val: string): boolean

/**
 * 是否为有效的IP v6
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidIPV6('2031:0000:130f:0000:0000:09c0:876a:130b');
 * // => true
 *
 */
export declare function isValidIPV6(val: string): boolean

/**
 * 是否为有效的护照（包含香港、澳门）
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidPassport('s28233515');
 * // => true
 *
 * isValidPassport('141234567');
 * // => true
 *
 * isValidPassport('159203084');
 * // => true
 *
 * isValidPassport('MA1234567');
 * // => true
 *
 * isValidPassport('K25345719');
 * // => true
 */
export declare function isValidPassport(val: string): boolean

/**
 * 是否为有效的电话(座机)
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isTelephone('0571-4211236');
 * // => true
 */
export declare function isValidTelephone(val: string): boolean

/**
 * 是否为有效的手机号，中国手机号(最宽松), 只要是1开头即可, 如果你的手机号是用来接收短信, 优先建议选择这一条
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isMobileLoose('008618311006933');
 * // => true
 *
 * isMobileLoose('+8617888829981');
 * // => true
 *
 * isMobileLoose('19119255642');
 * // => true
 */
export declare function isMobileLoose(val: string): boolean

/**
 * 是否为有效的手机号，中国手机号(严谨), 根据工信部2019年最新公布的手机号段
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isMobileStrict('008618311006933');
 * // => true
 *
 * isMobileStrict('+8617888829981');
 * // => true
 *
 * isMobileStrict('19119255642');
 * // => true
 */
export declare function isMobileStrict(val: string): boolean

/**
 * 是否为有效的中文姓名
 *
 * @param val
 * @returns {boolean}
 * @example
 *
 * isValidChineseName('葛二蛋');
 * // => true
 *
 * isValidChineseName('凯文·杜兰特');
 * // => true
 *
 * isValidChineseName('德克·维尔纳·诺维茨基');
 * // => true
 */
export declare function isValidChineseName(val: string): boolean

/**
 * 是否为有效的新能源车牌号
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isNewEnergyLicenseNo('京AD92035');
 * // => true
 *
 * isNewEnergyLicenseNo('甘G23459F');
 * // => true
 */
export declare function isNewEnergyLicenseNo(val: string): boolean

/**
 * 是否为有效的银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)）
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidBankNo('6234567890');
 * // => true
 *
 * isValidBankNo('6222026006705354217');
 * // => true
 */
export declare function isValidBankNo(val: string): boolean

/**
 * 是否为有效的 base64格式
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidBase64Format('data:image/gif;base64,xxxx==')
 * => true
 */
export declare function isValidBase64Format(val: string): boolean

/**
 * 是否为有效的A股代码
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidAShareCode('sz000858');
 * // => true
 *
 * isValidAShareCode('SZ002136');
 * // => true
 *
 * isValidAShareCode('SH600600');
 * // => true
 *
 * isValidAShareCode('sh600600');
 * // => true
 */
export declare function isValidAShareCode(val: string): boolean

/**
 * 是否为有效的统一社会信用代码
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isUnifiedSocialCreditCode('91230184MA1BUFLT44');
 * // => true
 *
 * isUnifiedSocialCreditCode('92371000MA3MXH0E3W');
 * // => true
 */
export declare function isUnifiedSocialCreditCode(val: string): boolean

/**
 * 是否为有效的考卷分数, 大于等于0, 小于等于150, 支持小数位出现5, 如145.5
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidTestScores('150');
 * // => true
 *
 * isValidTestScores('149.5');
 * // => true
 */
export declare function isValidTestScores(val: string): boolean

/**
 * 版本号格式必须为X.Y.Z
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidSemverVersion('16.3.10');
 * // => true
 */
export declare function isValidSemverVersion(val: string): boolean

/**
 * 是否为有效的国内座机电话
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isTelephone('0571-4211236');
 * // => true
 *
 * isTelephone('0341-86091234');
 * // => true
 */
export declare function isValidChineseTelephone(val: string): boolean

/**
 * 是否为有效的迅雷链接
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidThunder('thunder://QUEsICdtYWduZXQ6P3h0PXVybjpidGloOjBCQTE0RTUxRkUwNjU1RjE0Qzc4NjE4RjY4NDY0QjZFNTEyNjcyOUMnWlo=');
 * // => true
 */
export declare function isValidThunder(val: string): boolean

/**
 * 是否为有效的ed2k链接(宽松匹配)
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidEd2kLinkLoose('ed2k://|file|%E5%AF%84%E7%94%9F%E8%99%AB.PARASITE.2019.HD-1080p.X264.AAC-UUMp4(ED2000.COM).mp4|2501554832|C0B93E0879C6071CBED732C20CE577A3|h=5HTKZPQFYRKORN52I3M7GQ4QQCIHFIBV|/');
 * // => true
 */
export declare function isValidEd2kLinkLoose(val: string): boolean

/**
 * 是否为有效的磁力链接(宽松匹配)
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidMagnetLinkLoose('magnet:?xt=urn:btih:40A89A6F4FB1498A98087109D012A9A851FBE0FC');
 * // => true
 */
export declare function isValidMagnetLinkLoose(val: string): boolean

/**
 * 是否为有效的子网掩码
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidSubnetMask('255.255.255.0');
 * // => true
 */
export declare function isValidSubnetMask(val: string): boolean

/**
 * 是否为有效的md5格式(32位)
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidMD5('21fe181c5bfc16306a6828c1f7b762e8');
 * // => true
 */
export declare function isValidMD5(val: string): boolean

/**
 * 是否为有效的视频链接地址（视频格式可按需增删）
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidVideoLink('http://www.abc.com/video/wc.avi');
 * // => true
 */
export declare function isValidVideoLink(val: string): boolean

/**
 * 是否为有效的图片链接地址（图片格式可按需增删）
 *
 * @param {string} val
 * @returns {boolean}
 * @example
 *
 * isValidImageLink('https://www.abc.com/logo.png');
 * // => true
 */
export declare function isValidImageLink(val: string): boolean

/**
 * 是否为有效的用户名，4到16位（字母，数字，下划线，减号）
 *
 * @param {string} val
 * @param {number} minLength
 * @param {number} maxLength
 * @returns {boolean}
 * @example
 *
 * isValidUserName('xiaohua_qq');
 * // => true
 */
export declare function isValidUserName(val: string, minLength: number, maxLength: number): boolean

/**
 * 是否为有效的密码强度，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
 *
 * @param {string} val
 * @param {number} minLength 最小位数
 * @returns {boolean}
 * @example
 *
 * isValidPassword('Kd@curry666');
 * // => true
 */
export declare function isValidPassword(val: string, minLength: number): boolean

/**
 * 判断 iPhone X Series 机型，刘海屏
 *
 * @returns {boolean}
 * @example
 *
 * isPhoneX()
 * => true
 */
export declare function isPhoneX(): boolean

/**
 * 动态设置网页中的标题
 *
 * @param title
 * @param img
 */
export declare function setDocumentTitle(title: string, img?: string): boolean

/**
 * 是否是QQ浏览器内核
 *
 * @returns {boolean}
 * @example
 *
 * inQQBrowser();
 * // => false
 */
export declare function inQQBrowser(): boolean

/**
 * 是否是UC浏览器内核
 *
 * @returns {boolean}
 * @example
 *
 * inUCBrowser();
 * // => false
 */
export declare function inUCBrowser(): boolean

/**
 * 两个值之间的深入比较，以确定它们是否相等
 *
 * @param {Object} a
 * @param {Object} b
 * @returns {*}
 * @example
 *
 * equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' });
 *
 * // => true
 */
export declare function equals(a: any, b: any): boolean

/**
 * 处理emoji，用于把用utf16编码的字符转换成实体字符
 * @param {string} str 需要编译/解析的字符串
 * @param {string} type encode 编译 decode 转义
 * @returns {string} 编译/解析后的字符串
 * @example
 *
 * handleEmoji("😃", "encode");
 * // => "&#128515;"
 * handleEmoji("&#128522;", "decode")；
 * // => "😊"
 */
export declare function handleEmoji(str: string, type: string): string

/**
 * 删除对象里面value值为null的键值对
 * @param {*} data 接口返回的blob数据
 * @param {*} name excel名称
 * @param {*} callBack 导出成功/失败回调  回调返回{type:fail/success}  fail情况下 返回{ type: "fail", code, msg }
 */
export declare function exportXls(data: any, name: string, callBack: () => void): void;

/**
 * 获取图片的base64 url
 * @param {string} url 图片url
 * @returns {Promise} 图片base64信息
 */
export declare function getImgBase64(url: string): Promise<string>

/**
 * 检查是否是emoji表情
 * @param {*} value 正则校验变量
 * @return {boolean} 正则校验结果 true: 是emoji表情 false: 不是emoji表情
 */
export declare function isEmoji(value: string): boolean

/**
 * 检查是否为特殊字符
 * @param {string} value 正则校验的变量
 * @returns {boolean} 正则校验结果 true: 是特殊字符 false: 不是特殊字符
 */
export declare function isSpecialChar(value: string): boolean

/**
 * 过滤对象中为空的属性
 *
 * @param obj
 * @returns {*}
 * @example
 *
 * filterEmptyPropObj({name: 'foo', sex: ''})
 * // => {name: 'foo'}
 */
export declare function filterEmptyPropObj(obj: object): object;

/**
 * URLJoin
 *
 * @param args
 * @returns {string}
 * @description
 * Joins all given URL segments together, then normalizes the resulting URL.

 Use String.prototype.join('/') to combine URL segments, then a series of String.prototype.replace() calls with various regexps to normalize the resulting URL (remove double slashes, add proper slashes for protocol, remove slashes before parameters, combine parameters with '&' and normalize first parameter delimiter).
 * @example
 *
 * URLJoin('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo');
 * // => 'http://www.google.com/a/b/cd?foo=123&bar=foo'
 */
export declare function URLJoin (args: string): string;
