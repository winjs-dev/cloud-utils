import { defineConfig } from 'rspress/config';
import { pluginTypeDoc } from '@rspress/plugin-typedoc';
import path from 'path';
import fs from 'fs';

// 获取src目录下所有.ts文件
function getTypeScriptFiles(dir: string) {
  const files = fs.readdirSync(dir);
  return files
    .filter(file => file.endsWith('.ts') && !file.endsWith('.d.ts'))
    .map(file => path.join(dir, file));
}

export default defineConfig({
  title: 'cloud-utils-rslib',
  description: 'cloud-utils-rslib API文档',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'API', link: '/api' },
    ],
    sidebar: {
      '/api/': [
        {
          text: '核心方法',
          items: [
            { text: 'accAdd', link: '/api/accAdd' },
          ],
        },
      ],
    },
  },
  plugins: [
    pluginTypeDoc({
      entryPoints: getTypeScriptFiles(path.join(__dirname, 'src')),
    }),
  ],
});
