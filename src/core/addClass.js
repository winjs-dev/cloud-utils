import hasClass from './hasClass';

/**
 * dom操作，元素添加某个class
 *
 * @since 1.1.5
 * @param el HTML元素
 * @param cls css类名
 * @example
 *
 * <div class="box flex"></div>
 * addClass(document.querySelector('.box'), 'flex1');
 * // => <div class="box flex flex1"></div>
 */
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

export default addClass;
