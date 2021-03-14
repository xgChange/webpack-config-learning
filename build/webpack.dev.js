const Webpack = require('webpack')
const commonConfig = require('./webpack.common.js')
const { merge } = require('webpack-merge')

const devConfig = {
  mode: 'development',
  output: {
    publicPath: '/', // 以html的路径为准
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  optimization: {
    usedExports: true,
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()],
  devServer: {
    port: 3000,
    hot: true,
    hotOnly: true, // 即便hmr没有生效，也不让浏览器自动刷新
  },
}

module.exports = merge(commonConfig, devConfig)
