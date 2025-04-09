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
      if (fileName === 'is' || fileName === 'cookie') {
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
