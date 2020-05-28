/**
 * 图片压缩
 * @param  {string}   file [压缩文件]
 * @param  {object}   obj [压缩参数]
 * @param  {function} cb   [回调函数]
 * @return {string}        [返回压缩前和压缩后的格式]
 */
/* istanbul ignore next */
function photoCompress(file, obj, cb) {
// obj = {
//    width: 图片宽,
//    height: 图片高,
//    quality: 图像质量，
//    blob: 是否转换成Blob
//  }
  // 将以base64的图片url数据转换为Blob
  function convertBase64UrlToBlob(urlData) {
    var arr = urlData.split(',');
    var mime = arr[0].match(/:(.*?);/)[1];
    var bstr = atob(arr[1]);
    var n = bstr.length, u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type: mime});
  }

  // canvas 绘制图片
  function canvasDataURL(oldBase64) {
    var img = new Image();
    img.src = oldBase64;
    img.onload = function () {
      var that = this;
      // 默认按比例压缩
      var w = that.width,
        h = that.height,
        scale = w / h;
      w = obj.width || w;
      h = obj.height || (w / scale);
      var quality = 0.7;  // 默认图片质量为0.7
      //生成canvas
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      // 创建属性节点
      var anw = document.createAttribute('width');
      anw.nodeValue = w;
      var anh = document.createAttribute('height');
      anh.nodeValue = h;
      canvas.setAttributeNode(anw);
      canvas.setAttributeNode(anh);
      ctx.drawImage(that, 0, 0, w, h);
      // 图像质量
      if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
        quality = obj.quality;
      }
      // quality值越小，所绘制出的图像越模糊
      var base64 = canvas.toDataURL('image/jpeg', quality);
      // 回调函数返回base64的值
      if (obj.blob) {
        cb && cb(convertBase64UrlToBlob(base64), convertBase64UrlToBlob(oldBase64))
      } else {
        cb && cb(base64, oldBase64);
      }
    }
  }

  // 读取图片的base64格式
  var ready = new FileReader();
  ready.readAsDataURL(file);
  ready.onload = function () {
    var re = this.result;
    canvasDataURL(re)
  }
}

export default photoCompress;
