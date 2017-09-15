/**
 * 将文本插入到文本区域的光标位置<br>
 * _应用场景：_如在评论框里，在光标位置里插入emoji等
 *
 * @param {object} dom对象
 * @param {string} str
 * @example
 *
 * <textarea name="textarea" rows="10" cols="50">你好世界~</textarea>
 *
 * const editText = document.querySelector('#editText');
 *
 * insertText(editText, 'hello world');
 * // =>
 */
function insertAtCaret(dom, str = '') {
  if (document.selection) { // IE
    var sel = document.selection.createRange();
    sel.text = str;
  } else if (typeof dom.selectionStart === 'number' && typeof dom.selectionEnd === 'number') {
    var startPos = dom.selectionStart;
    var endPos = dom.selectionEnd;
    var cursorPos = startPos;
    var tmpStr = dom.value;

    dom.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
    cursorPos += str.length;
    dom.selectionStart = dom.selectionEnd = cursorPos;
  } else {
    dom.value += str;
  }
}

export default insertAtCaret;
