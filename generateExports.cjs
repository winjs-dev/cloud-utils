/*
 * @Author: liwb lwbhtml@163.com
 * @Date: 2025-04-09 11:06:16
 * @LastEditors: liwb lwbhtml@163.com
 * @LastEditTime: 2025-04-18 13:56:05
 * @FilePath: /cloud-utils/generateExports.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, 'src');
const OUTPUT_FILE = path.join(__dirname, 'src', 'index.ts');

function getTypeScriptFiles(dir) {
  // 忽略 src/core
  if (dir.includes('.internal')) {
    return [];
  }
  const files = fs.readdirSync(dir);
  return files
    .filter(file => file.endsWith('.ts') && !file.endsWith('.d.ts') && !file.endsWith('index.ts'))
    .map(file => path.join(dir, file));
}

function generateExportStatements(files) {
  return files
    .map(file => {
      const fileName = path.basename(file, '.ts');
      if (fileName === 'is' || fileName === 'cookie'|| fileName === 'math') {
        return `export * from './${fileName}';`;
      }
      return `export { ${fileName} } from './${fileName}';`;
    })
    .join('\n');
}

function main() {
  const tsFiles = getTypeScriptFiles(SRC_DIR);
  const exportStatements = '// 此文件是自动生成，请勿手动修改此文件。\r\n' + generateExportStatements(tsFiles);

  fs.writeFileSync(OUTPUT_FILE, exportStatements);
  console.log(`Generated exports in ${OUTPUT_FILE}`);
}

main();
