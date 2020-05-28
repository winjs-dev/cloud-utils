/**
 * 是否为 Light OS(容器)
 *
 * @example
 *
 * isLightOS();
 * // => true
 */
function isLightOS() {
  return window.navigator.userAgent.toLowerCase().indexOf('lightos') !== -1;
}

export default isLightOS;
