/**
 * 版本比较
 *
 * @since 1.2.5
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
export function compareVersion(v1: string, v2: string): number {
  var semver = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

  function indexOrEnd(str: string, q: string): number {
    return str.indexOf(q) === -1 ? str.length : str.indexOf(q);
  }

  function split(v: string): string[] {
    var c = v.replace(/^v/, '').replace(/\+.*$/, '');
    var patchIndex = indexOrEnd(c, '-');
    var arr = c.substring(0, patchIndex).split('.');
    arr.push(c.substring(patchIndex + 1));
    return arr;
  }

  function tryParse(v: string): string | number {
    return isNaN(Number(v)) ? v : Number(v);
  }

  function validate(version: string): void {
    if (typeof version !== 'string') {
      throw new TypeError('Invalid argument expected string');
    }
    if (!semver.test(version)) {
      throw new Error('Invalid argument not valid semver (\''+version+'\' received)');
    }
  }

  [v1, v2].forEach(validate);

  var s1 = split(v1);
  var s2 = split(v2);

  for (var i = 0; i < Math.max(s1.length - 1, s2.length - 1); i++) {
    var n1 = parseInt(s1[i] || '0', 10);
    var n2 = parseInt(s2[i] || '0', 10);

    if (n1 > n2) return 1;
    if (n2 > n1) return -1;
  }

  var sp1 = s1[s1.length - 1];
  var sp2 = s2[s2.length - 1];

  if (sp1 && sp2) {
    var p1 = sp1.split('.').map(tryParse);
    var p2 = sp2.split('.').map(tryParse);

    for (i = 0; i < Math.max(p1.length, p2.length); i++) {
      if (p1[i] === undefined || typeof p2[i] === 'string' && typeof p1[i] === 'number') return -1;
      if (p2[i] === undefined || typeof p1[i] === 'string' && typeof p2[i] === 'number') return 1;

      if (p1[i] > p2[i]) return 1;
      if (p2[i] > p1[i]) return -1;
    }
  } else if (sp1 || sp2) {
    return sp1 ? -1 : 1;
  }

  return 0;
}