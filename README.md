# [cloud-utils](https://github.com/cloud-templates/cloud-utils)
[![](https://img.shields.io/badge/Powered%20by-cloud--utils-brightgreen.svg)](https://github.com/cloud-templates/cloud-utils)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/yanhaijing/cloud-templates/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/cloud-templates/cloud-utils.svg?branch=master)](https://travis-ci.org/cloud-templates/cloud-utils)
[![npm](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/@winner-fed/cloud-utils)
[![NPM downloads](http://img.shields.io/npm/dm/cloud-utils.svg?style=flat-square)](http://www.npmtrends.com/@winner-fed/cloud-utils)
[![Coverage Status](https://coveralls.io/repos/github/cloud-templates/cloud-utils/badge.svg)](https://coveralls.io/github/cloud-templates/cloud-utils)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/cloud-templates/cloud-utils.svg)](http://isitmaintained.com/project/cloud-templates/cloud-utils "Percentage of issues still open")

常用的 Javascript 工具类方法集合

## 目录介绍

```
.
├── example 使用example
├── dist 编译产出代码
├── docs 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
```

## 如何使用
通过 npm 下载安装代码

```bash
$ npm install --save @winner-fed/cloud-utils
```

如果你是 node 环境

```js
var { formatDate } = require('@winner-fed/dist/cloud-utils.common');
```

如果你是 webpack 等环境

```js
import { formatDate } from '@winner-fed/dist/cloud-utils.esm';
```

如果你是 requirejs 环境

```js
requirejs(['node_modules/@winner-fed/cloud-utils/dist/cloud-utils.js'], function (utils) {
    var formatDate = utils.formatDate;
})
```

如果你是浏览器环境

```html
<script src="node_modules/@winner-fed/cloud-utils/dist/cloud-utils.min.js"></script>

<script>
    var utils = window['cloud-utils'];
</script>
```

## 文档
[API](https://cloud-templates.github.io/cloud-utils/)

## 贡献指南
首次运行需要先安装依赖

```bash
$ npm install
```
开发调试（利用 [rollup-watch](https://github.com/rollup/rollup-watch) ，自动监测源码变更，生成 `dist/cloud-utils.js`）
,在 `src/core` 添加相应的 `**.js` 文件，然后在 `src/main.js` 引用

```bash
$ npm run dev
```

添加测试用例

在 `src/test` 添加相应的测试用例文件， 命名遵循于 `**.spec.js` 规范

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试，浏览器环境需要手动测试，位于`test/browser`

```bash
$ npm test
```

修改 `package.json` 中的版本号，然后发布新版

```bash
$ npm run release
```
