import hasClass from './hasClass';
const trim = function(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

/**
 * dom操作，元素删除某个class
 *
 * @since 1.1.5
 * @param el HTML元素
 * @param cls css类名
 * @example
 *
 * <div class="box flex"></div>
 * removeClass(document.querySelector('.box'), 'flex');
 * // => <div class="box"></div>
 */
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

export default removeClass;
