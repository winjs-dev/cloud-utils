/**
 * 动态加载 script
 *
 * @param {string} src
 * @param {function} callback
 * @example
 *
 * dynamicLoadScript('https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js', () => {
 *   console.log('加载成功');
 * })
 * // => 加载成功
 *
 */
function dynamicLoadScript(src, callback) {
  const existingScript = document.getElementById(src);
  const cb = callback || function () {
  };

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = src; // src url for the third-party library being loaded.
    script.id = src;
    document.body.appendChild(script);

    const onEnd = 'onload' in script ? stdOnEnd : ieOnEnd;
    onEnd(script, cb);
  }

  if (existingScript && cb) cb(null, existingScript);

  function stdOnEnd(script, cb) {
    script.onload = function () {
      // this.onload = null here is necessary
      // because even IE9 works not like others
      this.onerror = this.onload = null;
      cb(null, script);
    };
    script.onerror = function () {
      this.onerror = this.onload = null;
      cb(new Error('Failed to load ' + src), script);
    };
  }

  function ieOnEnd(script, cb) {
    script.onreadystatechange = function () {
      if (this.readyState !== 'complete' && this.readyState !== 'loaded') return;
      this.onreadystatechange = null;
      cb(null, script); // there is no way to catch loading errors in IE8
    };
  }
}

export default dynamicLoadScript;
