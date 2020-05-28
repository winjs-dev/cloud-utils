/**
 * 从对象中检索给定选择器指示的一组属性
 *
 * {@link https://30secondsofcode.org/object#get}
 * @param from
 * @param selectors
 * @returns {string[]}
 * @example
 *
 * const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };
 * get(obj, 'selector.to.val', 'target[0]', 'target[2].a');
 * // =>  ['val to select', 1, 'test']
 */
function get(from, ...selectors) {
  return [...selectors].map((s) =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter((t) => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );
}

export default get;
