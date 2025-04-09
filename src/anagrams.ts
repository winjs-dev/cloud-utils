/**
 * 生成字符串的所有可能排列（包含重复项）
 * @description 使用递归算法生成输入字符串的所有可能排列组合
 * @since 1.2.1
 * @param {string} str - 输入字符串
 * @returns {string[]} 所有可能的排列组合数组
 * @throws {TypeError} 当输入参数不是字符串时抛出
 * @example
 * anagrams('abc');
 * // => ['abc','acb','bac','bca','cab','cba']
 */
export function anagrams(str: string): string[] {
  if (typeof str !== 'string') {
    throw new TypeError('输入参数必须是字符串');
  }

  if (str.length <= 2) {
    return str.length === 2 ? [str, str[1] + str[0]] : [str];
  }

  return str.split('').reduce<string[]>((acc, letter, i) => {
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const permutations = anagrams(remaining).map(val => letter + val);
    return acc.concat(permutations);
  }, []);
}
