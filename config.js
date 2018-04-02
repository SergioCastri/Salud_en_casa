const path = require('path')

const rootPath = path.resolve(__dirname, '.')
const port = process.env.Dev ? 8080 : 3000
const morganMode = process.env.Dev ? 'dev' : 'tiny'

module.exports = {
  rootPath,
  port,
  morganMode
}