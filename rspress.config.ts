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
interface ExportItem {
  name: string;
  type: 'function' | 'interface' | 'type' | 'class' | 'enum' | 'const';
}

function getSidebarItems(dir: string) {
  const files = getTypeScriptFiles(dir);
  const sidebarGroups: Array<{
    text: string;
    link?: string;
    collapsible?: boolean;
    items?: Array<{ text: string; link: string; }>;
  }> = [];

  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    const fileName = path.basename(file, '.ts');

    // 匹配不同类型的导出语句
    const exports: ExportItem[] = [];
    
    // 匹配 export function
    const functionRegex = /export\s+(?:async\s+)?function\s+(\w+)/g;
    let match;
    while ((match = functionRegex.exec(content)) !== null) {
      exports.push({ name: match[1], type: 'function' });
    }

    // 匹配 export const (函数) - 支持有类型注解的箭头函数
    const constFunctionRegex = /export\s+const\s+(\w+)\s*=\s*(?:\([^)]*\)(?::\s*[^=]+)?\s*=>|async\s*\([^)]*\)(?::\s*[^=]+)?\s*=>|function)/g;
    while ((match = constFunctionRegex.exec(content)) !== null) {
      exports.push({ name: match[1], type: 'function' });
    }

    // 匹配 export interface
    const interfaceRegex = /export\s+interface\s+(\w+)/g;
    while ((match = interfaceRegex.exec(content)) !== null) {
      exports.push({ name: match[1], type: 'interface' });
    }

    // 匹配 export type
    const typeRegex = /export\s+type\s+(\w+)/g;
    while ((match = typeRegex.exec(content)) !== null) {
      exports.push({ name: match[1], type: 'type' });
    }

    // 匹配 export class
    const classRegex = /export\s+(?:abstract\s+)?class\s+(\w+)/g;
    while ((match = classRegex.exec(content)) !== null) {
      exports.push({ name: match[1], type: 'class' });
    }

    // 匹配 export enum
    const enumRegex = /export\s+enum\s+(\w+)/g;
    while ((match = enumRegex.exec(content)) !== null) {
      exports.push({ name: match[1], type: 'enum' });
    }

    // 匹配其他 export const (常量)
    const constRegex = /export\s+const\s+(\w+)\s*=\s*(?![^;]*(?:=>|function))[^;]+;/g;
    while ((match = constRegex.exec(content)) !== null) {
      // 排除已经匹配为函数的const
      if (!exports.find(item => item.name === match[1] && item.type === 'function')) {
        exports.push({ name: match[1], type: 'function' });
      }
    }

    // 根据类型生成对应的路径
    const getApiPath = (exportItem: ExportItem): string => {
      switch (exportItem.type) {
        case 'function':
          return `/api/functions/${exportItem.name}`;
        case 'interface':
          return `/api/interfaces/${exportItem.name}`;
        case 'type':
          return `/api/types/${exportItem.name}`;
        case 'class':
          return `/api/classes/${exportItem.name}`;
        case 'enum':
          return `/api/enums/${exportItem.name}`;
        case 'const':
          return `/api/variables/${exportItem.name}`;
        default:
          return `/api/functions/${exportItem.name}`;
      }
    };

    // 处理文件导出
    if (exports.length > 1) {
      // 多个导出项，创建分组
      sidebarGroups.push({
        text: fileName,
        collapsible: true,
        items: exports.map(exportItem => ({
          text: `${exportItem.name}`,
          link: getApiPath(exportItem)
        }))
      } as any);
    } else if (exports.length === 1) {
      // 单个导出项，直接创建链接
      const exportItem = exports[0];
      sidebarGroups.push({
        text: `${fileName}`,
        link: getApiPath(exportItem)
      } as any);
    } else {
      // 无明确导出，使用文件名
      sidebarGroups.push({
        text: fileName,
        link: `/api/modules/${fileName}`
      } as any);
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
          items: getSidebarItems(path.join(__dirname, 'src')) as any,
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
