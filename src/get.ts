/**
 * 从对象中检索给定选择器指示的一组属性
 * 
 * {@link https://30secondsofcode.org/object#get}
 * @param {Record<string, any>} from - 源对象
 * @param {...string} selectors - 属性选择器
 * @returns {any[]} 检索到的属性值数组
 * @example
 *
 * const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };
 * get(obj, 'selector.to.val', 'target[0]', 'target[2].a');
 * // => ['val to select', 1, 'test']
 */
export function get(from: Record<string, any>, ...selectors: string[]): any[] {
  return selectors.map((s) =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter((t) => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );
}