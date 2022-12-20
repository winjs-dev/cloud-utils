const toString = Object.prototype.toString;

/**
 * 判断类型的 is 函数
 * @param val
 * @param type
 * @return {boolean}
 */
export function is (val, type) {
  return toString.call(val) === `[object ${type}]`;
}

/**
 * 判断是否为 undefined
 * @param val
 * @return {boolean}
 */
export function isDef (val) {
  return typeof val !== 'undefined';
}

/**
 * 判断值未定义
 * @param val
 * @return {boolean}
 */
export function isUnDef (val) {
  return !isDef(val);
}

/**
 * 判断是否为 object
 * @param val
 * @return {boolean}
 */
export function isObject (val) {
  return val !== null && is(val, 'Object');
}

/**
 * 判断是否为 Date
 * @param val
 * @return {boolean}
 */
export function isDate (val) {
  return is(val, 'Date');
}

/**
 * 判断是否为空值
 * @param val
 * @return {boolean}
 */
export function isNull (val) {
  return val === null;
}

/**
 * 判断是否为空值且未定义
 * @param val
 * @return {boolean}
 */
export function isNullAndUnDef (val) {
  return isUnDef(val) && isNull(val);
}

/**
 * 判断是否为空值或未定义
 * @param val
 * @return {boolean}
 */
export function isNullOrUnDef (val) {
  return isUnDef(val) || isNull(val);
}

/**
 * 判断是否为数字
 * @param val
 * @return {boolean}
 */
export function isNumber (val) {
  return is(val, 'Number');
}

/**
 * 判断是否为 Promise
 * @param val
 * @return {boolean}
 */
export function isPromise (val) {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

/**
 * 判断是否为字符串
 * @param val
 * @return {boolean}
 */
export function isString (val) {
  return is(val, 'String');
}

/**
 * 判断是否为函数
 * @param val
 * @return {boolean}
 */
export function isFunction (val) {
  return typeof val === 'function';
}

/**
 * 判断是否为 Boolean
 * @param val
 * @return {boolean}
 */
export function isBoolean (val) {
  return is(val, 'Boolean');
}

/**
 * 判断是否为正则
 * @param val
 * @return {boolean}
 */
export function isRegExp (val) {
  return is(val, 'RegExp');
}

/**
 * 判断是否为数组
 * @param val
 * @return {boolean}
 */
export function isArray (val) {
  return val && Array.isArray(val);
}

/**
 * 判断是否为 window
 * @param val
 * @return {boolean}
 */
export function isWindow (val) {
  return typeof window !== 'undefined' && is(val, 'Window');
}

/**
 * 判断是否为 Element 元素
 * @param val
 * @return {boolean}
 */
export function isElement (val) {
  return isObject(val) && !!val.tagName;
}

/**
 * 判断是否为 Map
 * @param val
 * @return {boolean}
 */
export function isMap (val) {
  return is(val, 'Map');
}

/**
 * 服务端
 * @type {boolean}
 */
export const isServer = typeof window === 'undefined';

/**
 * 客户端
 * @type {boolean}
 */
export const isClient = !isServer;
