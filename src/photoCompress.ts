/**
 * photoCompress
 * @Author: liwb (lwbhtml@163.com)
 * @Date: 2025-04-09 11:11
 * @LastEditTime: 2025-04-09 11:11
 * @Description: photoCompress
 */
/**
 * 图片压缩工具
 * @description 通过Canvas API实现图片压缩，支持调整尺寸、质量和输出格式
 * @param {File} file - 需要压缩的图片文件
 * @param {Object} obj - 压缩参数配置
 * @param {number} [obj.width] - 压缩后图片宽度（保持比例）
 * @param {number} [obj.height] - 压缩后图片高度（保持比例）
 * @param {number} [obj.quality=0.7] - 图片质量（0-1之间）
 * @param {boolean} [obj.blob=false] - 是否输出Blob格式
 * @param {function} cb - 压缩完成回调函数
 * @param {string|Blob} cb.compressed - 压缩后的图片数据
 * @param {string|Blob} cb.original - 原始图片数据
 * @returns {void}
 * @throws {TypeError} 当输入参数类型不正确时抛出
 * @example
 * const fileInput = document.querySelector('input[type="file"]');
 * fileInput.addEventListener('change', (e) => {
 *   photoCompress(e.target.files[0], {
 *     width: 800,
 *     quality: 0.6
 *   }, (compressed, original) => {
 *     console.log('压缩完成', compressed);
 *   });
 * });
 */
export function photoCompress(
  file: File,
  obj: {
    width?: number;
    height?: number;
    quality?: number;
    blob?: boolean;
  } = {},
  cb?: (compressed: string | Blob, original: string | Blob) => void
): void {
  function convertBase64UrlToBlob(urlData: string): Blob {
    const arr = urlData.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    const u8arr = new Uint8Array(bstr.length);

    for (let i = 0; i < bstr.length; i++) {
      u8arr[i] = bstr.charCodeAt(i);
    }

    return new Blob([u8arr], {type: mime});
  }

  function canvasDataURL(oldBase64: string): void {
    const img = new Image();
    img.src = oldBase64;
    img.onload = function() {
      const that = this as HTMLImageElement;
      let w = that.width;
      let h = that.height;
      const scale = w / h;

      w = obj.width || w;
      h = obj.height || (w / scale);

      let quality = 0.7;
      if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
        quality = obj.quality;
      }

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      canvas.width = w;
      canvas.height = h;

      ctx.drawImage(that, 0, 0, w, h);
      const base64 = canvas.toDataURL('image/jpeg', quality);

      if (obj.blob) {
        cb?.(convertBase64UrlToBlob(base64), convertBase64UrlToBlob(oldBase64));
      } else {
        cb?.(base64, oldBase64);
      }
    };
  }

  const ready = new FileReader();
  ready.readAsDataURL(file);
  ready.onload = function() {
    const re = this.result as string;
    canvasDataURL(re);
  };
}
