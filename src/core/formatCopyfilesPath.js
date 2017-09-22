/**
 * 静态文件路径补全
 *
 * @since 1.0.7
 * @param {string} file 文件名字
 * @returns {string}
 * @example
 *
 * formatCopyfilesPath('logo.png');
 * // => assets/images/copyfiles/logo.png
 */
function formatCopyfilesPath(file) {
  return `assets/images/copyfiles/${file}`;
}

export default formatCopyfilesPath;
