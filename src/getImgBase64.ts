/**
 * 获取图片的base64 url
 * @param url - 图片url
 * @returns Promise解析后的图片base64信息
 * @example
 *
 * getImgBase64('https://example.com/image.png')
 * .then(base64 => console.log(base64))
 * .catch(err => console.error(err));
 *
 * @example
 * async function example() {
 *   try {
 *     const base64 = await getImgBase64('https://example.com/image.png');
 *     console.log(base64);
 *   } catch (err) {
 *     console.error(err);
 *   }
 * }
 */
export function getImgBase64(url: string): Promise<string> {
  const Img = new Image();
  let dataURL = '';
  Img.setAttribute('crossOrigin', 'anonymous');
  Img.src = url;
  
  return new Promise((resolve, reject) => {
    Img.onload = function () {
      const canvas = document.createElement('canvas');
      const width = Img.width;
      const height = Img.height;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }
      
      const scale = 5;
      ctx.scale(scale, scale);
      canvas.width = width * scale;
      canvas.height = height * scale;
      ctx.drawImage(Img, 0, 0, width * scale, height * scale);
      dataURL = canvas.toDataURL('image/png');
      resolve(dataURL);
    };
    
    Img.onerror = function (err) {
      reject(err);
    };
  });
}