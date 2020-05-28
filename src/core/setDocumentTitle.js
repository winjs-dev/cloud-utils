/**
 * 动态设置网页中的标题
 *
 * @param title
 * @param img
 */
function setDocumentTitle(title, img) {
  if (!title || window.document.title === title) return;
  document.title = title;
  const mobile = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(mobile)) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    // 替换成站标favicon路径或者任意存在的较小的图片即可
    iframe.setAttribute('src', img || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
    const iframeCallback = function () {
      setTimeout(function () {
        iframe.removeEventListener('load', iframeCallback);
        document.body.removeChild(iframe);
      }, 0);
    };
    iframe.addEventListener('load', iframeCallback);
    document.body.appendChild(iframe);
  }
}

export default setDocumentTitle;
