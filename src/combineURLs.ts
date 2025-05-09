/**
 * Creates a new URL by combining the specified URLs
 *
 * @since 1.2.5
 * @param {string} baseURL The base URL
 * @param {string} relativeURLs The relative URL
 * @returns {string} The combined URL
 */
export function combineURLs(baseURL: string, ...relativeURLs: string[]): string {
  const length = relativeURLs.length;
  if (length > 0) {
    const relativeUrlsArr = relativeURLs.map((item) => item.replace(/^\/+/, '').replace(/\/+$/, ''));
    let relativeUrlStr = relativeUrlsArr.join('/');
    if (relativeURLs[length - 1].slice(-1) === '/') {
      relativeUrlStr += '/';
    }
    return baseURL.replace(/\/+$/, '') + '/' + relativeUrlStr;
  } else {
    return baseURL;
  }
}