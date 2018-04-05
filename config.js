const path = require('path')

const rootPath = path.resolve(__dirname, '.')
const morganMode = process.env.Dev ? 'dev' : 'tiny'

module.exports = {
  rootPath,
  port,
  morganMode
}