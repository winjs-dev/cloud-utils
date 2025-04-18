/*
 * @Author: liwb lwbhtml@163.com
 * @Date: 2025-04-02 09:23:33
 * @LastEditors: liwb lwbhtml@163.com
 * @LastEditTime: 2025-04-18 15:19:04
 * @FilePath: /cloud-utils/rspress.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'rspress/config';
import { pluginTypeDoc } from '@rspress/plugin-typedoc';
import path from 'path';
import fs from 'fs';
import pluginSitemap from 'rspress-plugin-sitemap';

// 获取src目录下所有.ts文件
function getTypeScriptFiles(dir: string) {
  const files = fs.readdirSync(dir);
  return files
    .filter(file => file.endsWith('.ts') && !file.endsWith('.d.ts') && !file.endsWith('.d.ts') && !file.endsWith('index.ts'))
    .map(file => path.join(dir, file));
}

// sidebar 里的 items 要根据 getTypeScriptFiles 动态生成
// 比如 is 和 cookie 里有很多导出的方法，导出的方法单独形成一个 items，并且 text 是根名称，需要根据导出的方法名来生成链接，优化和完善下面方法
function getSidebarItems(dir: string) {
  const files = getTypeScriptFiles(dir);
  const sidebarGroups = [];

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const fileName = path.basename(file, '.ts');

    // 匹配所有导出语句，包括命名导出和默认导出
    const exportRegex = /export\s+(?:default\s+)?(?:function|const|class|interface|type)\s+(\w+)/g;
    const exports = [];
    let match;

    while ((match = exportRegex.exec(content)) !== null) {
      exports.push(match[1]);
    }

    // 处理文件导出
    if (exports.length > 1) {
      // 多个导出方法，创建分组
      sidebarGroups.push({
        text: fileName,
        collapsible: true,
        items: exports.map(name => ({
          text: name,
          link: `/api/functions/${name}`
        }))
      });
    } else if (exports.length === 1) {
      // 单个导出方法，直接创建链接
      sidebarGroups.push({
        text: `${fileName}`,
        link: `/api/functions/${fileName}`
      });
    } else {
      // 无明确导出，使用文件名
      sidebarGroups.push({
        text: fileName,
        link: `/api/functions/${fileName}`
      });
    }
  }

  // 按文件名排序
  return sidebarGroups.sort((a, b) => a.text.localeCompare(b.text));
}

const siteUrl = 'https://winjs-dev.github.io/cloud-utils/';

export default defineConfig({
  title: '@winner-fed/cloud-utils',
  description: '一个实用的工具类库',
  base: '/cloud-utils/',
  themeConfig: {
    searchPlaceholderText: '搜索文档',
    nav: [
      {
        text: '指南',
        link: '/guide/getting-started',
      },
      { text: 'API', link: '/api' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            {
              text: '快速开始',
              link: '/guide/getting-started',
            },
          ],
        },
      ],
      '/api/': [
        {
          text: '核心方法',
          items: getSidebarItems(path.join(__dirname, 'src')),
        },
      ],
    }
  },
  plugins: [
    pluginTypeDoc({
      entryPoints: [path.join(__dirname, 'src/index.ts')],
    }),
    pluginSitemap({
      domain: siteUrl,
    }),
  ],
});
