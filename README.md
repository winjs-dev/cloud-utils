# cloud-utils [![Build Status](https://travis-ci.org/cloud-templates/cloud-utils.svg)](https://travis-ci.org/cloud-templates/cloud-utils)
常用的工具方法

## 开始

克隆本项目并且安装依赖

```bash
git clone git@github.com:cloud-templates/cloud-utils.git
cd cloud-utils
npm install or yarn
```

`npm run build` builds the library to `dist`, generating three files:

* `dist/cloud-utils.common.js`
    A CommonJS bundle, suitable for use in Node.js, that `require`s the external dependency. This corresponds to the `"main"` field in package.json
* `dist/cloud-utils.esm.js`
    an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency. This corresponds to the `"module"` field in package.json
* `dist/cloud-utils.js or cloud-utils.min.js`
    a UMD build, suitable for use in any environment (including the browser, as a `<script>` tag), that includes the external dependency. This corresponds to the `"browser"` field in package.json

`npm run dev` builds the library(`dist/cloud-utils.js`), then keeps rebuilding it whenever the source files change using [rollup-watch](https://github.com/rollup/rollup-watch).

## License

[MIT](LICENSE).


