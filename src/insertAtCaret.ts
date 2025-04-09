/**
 * 将文本插入到文本区域的光标位置
 *
 * _应用场景：_如在评论框里，在光标位置里插入emoji等
 *
 * @param {HTMLTextAreaElement | HTMLInputElement} dom - 文本区域或输入框DOM对象
 * @param {string} str - 要插入的文本
 * @returns {void}
 * @example
 *
 * <textarea name="textarea" rows="10" cols="50">你好世界~</textarea>
 *
 * const editText = document.querySelector('textarea');
 * insertAtCaret(editText, 'hello world');
 * // => 在光标位置插入'hello world'
 */
export function insertAtCaret(dom: HTMLTextAreaElement | HTMLInputElement, str: string = ''): void {
  if ((document as any).selection) { // IE
    const sel = (document as any).selection.createRange();
    sel.text = str;
  } else if (typeof dom.selectionStart === 'number' && typeof dom.selectionEnd === 'number') {
    const startPos = dom.selectionStart;
    const endPos = dom.selectionEnd;
    let cursorPos = startPos;  // 修改为 let 声明
    const tmpStr = dom.value;

    dom.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
    cursorPos += str.length;
    dom.selectionStart = dom.selectionEnd = cursorPos;
  } else {
    dom.value += str;
  }
  dom.focus();
}
