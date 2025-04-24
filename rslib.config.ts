import { defineConfig } from '@rslib/core';
import pkg from './package.json';

const moduleName = 'cloud-utils';

const banner =
  `/*!
 * ${moduleName} v${pkg.version} (https://github.com/winjs-dev/cloud-utils)
 * API https://winjs-dev.github.io/cloud-utils/
 * Copyright 2017-${(new Date).getFullYear()} ${pkg.author.name}. All Rights Reserved
 * Licensed under ${pkg.license} (https://github.com/winjs/cloud-utils/blob/master/LICENSE)
 */
 `;
export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: 'es5',
      dts: true,
      banner: {
        js: banner
      }
    },
    {
      format: 'cjs',
      syntax: 'es5',
      banner: {
        js: banner
      }
    },
    {
      format: 'umd',
      umdName: 'cloud-utils',
      banner: {
        js: banner
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
      'src/__tests__/'
    ]
  },
  output: {
    target: 'web'
  }
});
