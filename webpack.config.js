const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '_main.js',
    path: path.join(__dirname, 'dist')
  }
}