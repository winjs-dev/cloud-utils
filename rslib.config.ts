import { defineConfig } from '@rslib/core';
import pkg from './package.json';
import { glob } from 'glob';
import path from 'path';

const moduleName = 'cloud-utils';

const banner =
  `/*!
 * ${moduleName} v${pkg.version} (https://github.com/winjs-dev/cloud-utils)
 * API https://winjs-dev.github.io/cloud-utils/
 * Copyright 2017-${(new Date).getFullYear()} ${pkg.author.name}. All Rights Reserved
 * Licensed under ${pkg.license} (https://github.com/winjs/cloud-utils/blob/master/LICENSE)
 */
 `;

// 获取所有单独的函数文件
const getIndividualEntries = () => {
  const files = glob.sync('src/*.ts', { 
    ignore: ['src/index.ts', 'src/__tests__/**'] 
  });
  
  const entries: Record<string, string> = {};
  files.forEach(file => {
    const fileName = path.basename(file, '.ts');
    entries[fileName] = file;
  });
  
  return entries;
};

export default defineConfig({
  lib: [
    // 主入口点 - 统一构建
    {
      format: 'esm',
      syntax: 'es5',
      dts: true,
      banner: {
        js: banner
      },
      source: {
        entry: {
          index: 'src/index.ts'
        }
      },
      output: {
        distPath: {
          root: './dist'
        }
      }
    },
    {
      format: 'cjs',
      syntax: 'es5',
      dts: {
        autoExtension: true
      },
      banner: {
        js: banner
      },
      source: {
        entry: {
          index: 'src/index.ts'
        }
      },
      output: {
        distPath: {
          root: './dist'
        }
      }
    },
    // 独立函数声明文件生成（在 dist 根目录）
    {
      format: 'esm',
      syntax: 'es5',
      dts: true,
      banner: {
        js: banner
      },
      source: {
        entry: getIndividualEntries()
      },
      output: {
        distPath: {
          root: './dist'
        },
        filename: {
          js: 'temp/[name].js'  // 临时文件，稍后删除
        }
      }
    },
    // 独立函数构建 - ESM 格式（仅生成 JS 文件）
    {
      format: 'esm',
      syntax: 'es5',
      dts: false,
      banner: {
        js: banner
      },
      source: {
        entry: getIndividualEntries()
      },
      output: {
        distPath: {
          root: './dist/esm'
        },
        filename: {
          js: '[name].js'
        }
      }
    },
    // 独立函数构建 - CJS 格式（仅生成 JS 文件）
    {
      format: 'cjs',
      syntax: 'es5',
      dts: false,
      banner: {
        js: banner
      },
      source: {
        entry: getIndividualEntries()
      },
      output: {
        distPath: {
          root: './dist/cjs'
        },
        filename: {
          js: '[name].js'
        }
      }
    },
    // UMD 格式保持统一构建
    {
      format: 'umd',
      umdName: 'cloud-utils',
      banner: {
        js: banner
      },
      source: {
        entry: {
          index: 'src/index.ts'
        }
      },
      output: {
        distPath: {
          root: './dist/umd'
        }
      }
    }
  ],
  source: {
    exclude: [
     /src\/__tests__/
    ]
  },
  output: {
    target: 'web'
  },
  // 性能优化配置，避免同时构建过多文件造成卡死
  tools: {
    rspack: {
      experiments: {
        // 关闭懒加载编译
        lazyCompilation: false,
      },
      optimization: {
        // 禁用代码分割，每个文件独立构建
        splitChunks: false,
      }
    }
  }
});
