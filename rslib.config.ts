import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: 'es5',
      dts: true
    },
    {
      format: 'cjs',
      syntax: 'es5'
    },
    {
      format: 'umd',
      umdName: 'cloud-utils',
      output: {
        distPath: {
          root: './dist/umd',
        },
      }
    },
  ],
  output: {
    target: 'web',
  },
});
