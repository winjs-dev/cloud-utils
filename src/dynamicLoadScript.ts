/**
 * 动态加载 script
 *
 * @param {string} src - 要加载的脚本URL
 * @param {(err: Error | null, script?: HTMLScriptElement) => void} [callback] - 加载完成后的回调函数
 * @returns {void}
 * @example
 *
 * dynamicLoadScript('https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js', (err, script) => {
 *   if (err) {
 *     console.error('加载失败', err);
 *   } else {
 *     console.log('加载成功', script);
 *   }
 * });
 * // => 加载成功 <script id="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js" src="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js"></script>
 */
export function dynamicLoadScript(
  src: string,
  callback?: (err: Error | null, script?: HTMLScriptElement) => void
): void {
  const existingScript = document.getElementById(src) as HTMLScriptElement | null;
  const cb = callback || function () {};

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = src; // src url for the third-party library being loaded.
    script.id = src;
    document.body.appendChild(script);

    const onEnd = 'onload' in script ? stdOnEnd : ieOnEnd;
    onEnd(script, cb);
  }

  if (existingScript && cb) {
    const onEnd = 'onload' in existingScript ? stdOnEnd : ieOnEnd;
    onEnd(existingScript, cb);
  }

  function stdOnEnd(script: HTMLScriptElement, cb: (err: Error | null, script?: HTMLScriptElement) => void) {
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

  function ieOnEnd(script: HTMLScriptElement, cb: (err: Error | null, script?: HTMLScriptElement) => void) {
    script.onreadystatechange = function () {
      if (this.readyState !== 'complete' && this.readyState !== 'loaded') return;
      this.onreadystatechange = null;
      cb(null, script); // there is no way to catch loading errors in IE8
    };
  }
}

export default dynamicLoadScript;