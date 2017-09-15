const pack = require('../package.json')
const version = process.env.VERSION || pack.version

module.exports =
  '/*!\n' +
  ` * ${pack.name} v${version} \n` +
  ` * (c) ${new Date().getFullYear()} ${pack.author.name}\n` +
  ` * ${pack.description}\n` +
  ` * Released under the ${pack.license} License.\n` +
  ' */'
