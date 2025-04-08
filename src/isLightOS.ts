/**
 * 是否为 Light OS(容器)
 *
 * @returns {boolean} 是否为Light OS
 * @example
 *
 * isLightOS();
 * // => true
 */
export function isLightOS(): boolean {
  return window.navigator.userAgent.toLowerCase().indexOf('lightos') !== -1;
}