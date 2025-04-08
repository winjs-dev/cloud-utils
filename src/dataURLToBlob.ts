/**
 * 将dataURL转换为Blob对象
 * 
 * @param {string} dataURL - 包含base64编码数据的dataURL字符串
 * @returns {Blob} - 返回对应的Blob对象
 * @example
 * const URI = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZGVmcz48c3R5bGUvPjwvZGVmcz48cGF0aCBkPSJNOTU5LjQzNiAyNDMuNUwzNzcuNDEzIDg3MC4yNyA2NC4wMiA0NjcuMzQ0bDExNC43MjctOTcuOTMgMTk4LjY2NiAyMDcuMDYgNDkyLjQ4Mi00MjIuNTEgODkuNTQgODkuNTM3em0wIDAiIGZpbGw9IiM0M2E5ZjEiLz48L3N2Zz4=';
 * 
 * dataURLToBlob(URI);
 * // => Blob {size: 248, type: "image/svg+xml"}
 */
export function dataURLToBlob(dataURL: string): Blob {
  const BASE64_MARKER = ';base64,';
  let parts: string[];
  let contentType: string;
  let raw: string;

  if (dataURL.indexOf(BASE64_MARKER) === -1) {
    parts = dataURL.split(',');
    contentType = parts[0].split(':')[1];
    raw = decodeURIComponent(parts[1]);

    return new Blob([raw], {type: contentType});
  }

  parts = dataURL.split(BASE64_MARKER);
  contentType = parts[0].split(':')[1];
  raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], {type: contentType});
}
