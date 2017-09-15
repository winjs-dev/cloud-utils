const replace = require('rollup-plugin-replace')
const buble = require('rollup-plugin-buble')
const resolve = require('rollup-plugin-node-resolve')
const banner = require('./banner')
const pack = require('../package.json')

const moduleName = 'cloudUtils';

const entries = {
  // Runtime only (CommonJS). Used by bundlers e.g. Webpack & Browserify
  commonjs: {
    entry: 'src/main.js',
    dest: `dist/${pack.name}.common.js`,
    format: 'cjs',
    banner
  },
  // Runtime only (ES Modules). Used by bundlers that support ES Modules,
  // e.g. Rollup & Webpack 2
  esm: {
    entry: 'src/main.js',
    dest: `dist/${pack.name}.esm.js`,
    format: 'es',
    banner
  },
  // runtime-only production build (Browser)
  production: {
    entry: 'src/main.js',
    dest: `dist/${pack.name}.min.js`,
    format: 'umd',
    env: 'production',
    moduleName,
    banner
  },
  // runtime-only build (Browser)
  development: {
    entry: 'src/main.js',
    dest: `dist/${pack.name}.js`,
    format: 'umd',
    env: 'development',
    moduleName,
    banner
  }
}

function genConfig (opts) {
  const config = {
    entry: opts.entry,
    dest: opts.dest,
    format: opts.format,
    banner: opts.banner,
    moduleName,
    plugins: [
      resolve(),
      buble()
    ]
  }

  const replacePluginOptions = { '__VERSION__': pack.version }
  if (opts.env) {
    replacePluginOptions['process.env.NODE_ENV'] = JSON.stringify(opts.env)
  }
  config.plugins.push(replace(replacePluginOptions))

  return config
}

exports.getEntry = name => genConfig(entries[name])
exports.getAllEntries = () => Object.keys(entries).map(name => genConfig(entries[name]))
