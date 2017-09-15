/**
 * 生成guid
 *
 * @returns {string}
 * @example
 *
 * generateGUID();
 * // => 1e508ed6-6177-498d-c2a3-467f546db6ab
 */
function generateGUID() {
  var d = Date.now();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x7 | 0x8)).toString(16);
  });

  return uuid;
}

export default generateGUID;
