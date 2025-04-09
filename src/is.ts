const toString = Object.prototype.toString;

declare global {
  interface Window {
    UAParser: any;
  }
  var window: Window & typeof globalThis;
}

/**
 * 判断类型的 is 函数
 * @param val - 要判断的值
 * @param type - 类型字符串
 * @returns {boolean} 是否为指定类型
 * @example
 *
 * is([], 'Array'); // => true
 * is({}, 'Object'); // => true
 * is('', 'String'); // => true
 */
export function is(val: unknown, type: string): boolean {
  return toString.call(val) === `[object ${type}]`;
}

/**
 * 判断是否为 undefined
 * @param val - 要判断的值
 * @returns {boolean} 是否已定义
 * @example
 *
 * isDef(undefined); // => false
 * isDef(null); // => true
 * isDef(''); // => true
 */
export function isDef(val: unknown): boolean {
  return typeof val !== 'undefined';
}

/**
 * 判断值未定义
 * @param val - 要判断的值
 * @returns {boolean} 是否未定义
 * @example
 *
 * isUnDef(undefined); // => true
 * isUnDef(null); // => false
 * isUnDef(''); // => false
 */
export function isUnDef(val: unknown): boolean {
  return !isDef(val);
}

/**
 * 判断是否为 object
 * @param val - 要判断的值
 * @returns {boolean} 是否为对象
 * @example
 *
 * isObject({}); // => true
 * isObject([]); // => false
 * isObject(null); // => false
 */
export function isObject(val: unknown): boolean {
  return val !== null && is(val, 'Object');
}

/**
 * 判断是否为 Date
 * @param val - 要判断的值
 * @returns {boolean} 是否为日期对象
 * @example
 *
 * isDate(new Date()); // => true
 * isDate('2024-01-01'); // => false
 */
export function isDate(val: unknown): boolean {
  return is(val, 'Date');
}

/**
 * 判断是否为空值
 * @param val - 要判断的值
 * @returns {boolean} 是否为空值
 * @example
 *
 * isNull(null); // => true
 * isNull(undefined); // => false
 * isNull(''); // => false
 */
export function isNull(val: unknown): boolean {
  return val === null;
}

/**
 * 判断是否为空值且未定义
 * @param val - 要判断的值
 * @returns {boolean} 是否为空值且未定义
 * @example
 *
 * isNullAndUnDef(null); // => false
 * isNullAndUnDef(undefined); // => false
 * isNullAndUnDef(''); // => false
 */
export function isNullAndUnDef(val: unknown): boolean {
  return isUnDef(val) && isNull(val);
}

/**
 * 判断是否为空值或未定义
 * @param val - 要判断的值
 * @returns {boolean} 是否为空值或未定义
 * @example
 *
 * isNullOrUnDef(null); // => true
 * isNullOrUnDef(undefined); // => true
 * isNullOrUnDef(''); // => false
 */
export function isNullOrUnDef(val: unknown): boolean {
  return isUnDef(val) || isNull(val);
}

/**
 * 判断是否为数字
 * @param val - 要判断的值
 * @returns {boolean} 是否为数字
 * @example
 *
 * isNumber(123); // => true
 * isNumber('123'); // => false
 * isNumber(NaN); // => true
 */
export function isNumber(val: unknown): boolean {
  return is(val, 'Number');
}

/**
 * 判断是否为 Promise
 * @param val - 要判断的值
 * @returns {boolean} 是否为 Promise
 * @example
 *
 * isPromise(new Promise(() => {})); // => true
 * isPromise({}); // => false
 */
export function isPromise(val: unknown): boolean {
  return is(val, 'Promise') && isObject(val) && isFunction((val as Promise<unknown>).then) && isFunction((val as Promise<unknown>).catch);
}

/**
 * 判断是否为字符串
 * @param val - 要判断的值
 * @returns {boolean} 是否为字符串
 * @example
 *
 * isString(''); // => true
 * isString(123); // => false
 */
export function isString(val: unknown): boolean {
  return is(val, 'String');
}

/**
 * 判断是否为函数
 * @param val - 要判断的值
 * @returns {boolean} 是否为函数
 * @example
 *
 * isFunction(() => {}); // => true
 * isFunction({}); // => false
 */
export function isFunction(val: unknown): boolean {
  return typeof val === 'function';
}

/**
 * 判断是否为 Boolean
 * @param val - 要判断的值
 * @returns {boolean} 是否为布尔值
 * @example
 *
 * isBoolean(true); // => true
 * isBoolean(false); // => true
 * isBoolean(1); // => false
 */
export function isBoolean(val: unknown): boolean {
  return is(val, 'Boolean');
}

/**
 * 判断是否为正则
 * @param val - 要判断的值
 * @returns {boolean} 是否为正则表达式
 * @example
 *
 * isRegExp(/test/); // => true
 * isRegExp('test'); // => false
 */
export function isRegExp(val: unknown): boolean {
  return is(val, 'RegExp');
}

/**
 * 判断是否为数组
 * @param val - 要判断的值
 * @returns {boolean} 是否为数组
 * @example
 *
 * isArray([]); // => true
 * isArray({}); // => false
 */
export function isArray(val: unknown): boolean {
  return Boolean(val && Array.isArray(val));
}

/**
 * 判断是否为 window
 * @param val - 要判断的值
 * @returns {boolean} 是否为 window 对象
 * @example
 *
 * isWindow(window); // => true
 * isWindow({}); // => false
 */
export function isWindow(val: unknown): boolean {
  return typeof window !== 'undefined' && is(val, 'Window');
}

/**
 * 判断是否为 Element 元素
 * @param val - 要判断的值
 * @returns {boolean} 是否为 DOM 元素
 * @example
 *
 * isElement(document.createElement('div')); // => true
 * isElement({}); // => false
 */
export function isElement(val: unknown): boolean {
  return isObject(val) && !!(val as { tagName?: string }).tagName;
}

/**
 * 判断是否为 Map
 * @param val - 要判断的值
 * @returns {boolean} 是否为 Map 对象
 * @example
 *
 * isMap(new Map()); // => true
 * isMap({}); // => false
 */
export function isMap(val: unknown): boolean {
  return is(val, 'Map');
}

/**
 * 是否为服务端环境
 * @type {boolean}
 */
export const isServer = (): boolean  => typeof window === 'undefined';

/**
 * 是否为客户端环境
 * @type {boolean}
 */
export const isClient = (): boolean => !isServer();
