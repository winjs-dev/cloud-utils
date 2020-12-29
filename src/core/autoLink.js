/**
 * Renders a string as plaintext, with URLs converted to appropriate link elements.

 Use String.prototype.split() and String.prototype.match() with a regular expression to find URLs in a string.
 Return matched URLs rendered as <a> elements, dealing with missing protocol prefixes if necessary.
 Render the rest of the string as plaintext.
 * @param text
 * @returns {unknown[]}
 * @link https://www.30secondsofcode.org/react/s/auto-link
 * @example
 *
 * autoLink({text: 'http://www.baidu.com'})
 * // => <a href="http://www.baidu.com">http://www.baidu.com</a>
 */
function autoLink ({text}) {
  const delimiter = /((?:https?:\/\/)?(?:(?:[a-z0-9]?(?:[a-z0-9\-]{1,61}[a-z0-9])?\.[^\.|\s])+[a-z\.]*[a-z]+|(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})(?::\d{1,5})*[a-z0-9.,_\/~#&=;%+?\-\\(\\)]*)/gi;

  return text.split(delimiter).map(word => {
    let match = word.match(delimiter);
    if (match) {
      let url = match[0];
      const link = url.startsWith('http') ? url : `http://${url}`;
      return `<a href="${link}">${url}</a>`;
    }
    return word;
  });
}

export default autoLink;
