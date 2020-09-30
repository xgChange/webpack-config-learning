const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: './', // 以html的路径为准
  },
}
module.exports = merge(commonConfig, prodConfig)