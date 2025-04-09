/**
 * setDocumentTitle
 * @Author: liwb (lwbhtml@163.com)
 * @Date: 2025-04-09 11:18
 * @LastEditTime: 2025-04-09 11:18
 * @Description: setDocumentTitle
 */
/**
 * 动态设置网页标题（兼容iOS设备）
 * @description 设置网页标题并在iOS设备上通过iframe技巧触发标题更新
 * @param {string} title - 要设置的标题文本
 * @param {string} [img] - iOS设备使用的备用图片URL（base64数据或图片路径）
 * @throws {TypeError} 当title参数不是字符串时抛出
 * @example
 * setDocumentTitle('新标题');
 * setDocumentTitle('新标题', 'data:image/gif;base64,...');
 */
export function setDocumentTitle(title: string, img?: string): void {
  if (typeof title !== 'string') {
    throw new TypeError('标题必须是字符串类型');
  }

  if (!title || window.document.title === title) return;

  document.title = title;
  const mobile = navigator.userAgent.toLowerCase();

  if (/iphone|ipad|ipod/.test(mobile)) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.setAttribute('src', img || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');

    const iframeCallback = () => {
      setTimeout(() => {
        iframe.removeEventListener('load', iframeCallback);
        document.body.removeChild(iframe);
      }, 0);
    };

    iframe.addEventListener('load', iframeCallback);
    document.body.appendChild(iframe);
  }
}
