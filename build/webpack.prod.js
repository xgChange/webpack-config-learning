const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = {
  mode: 'production',
  output: {
    publicPath: './', // 以html的路径为准
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: {
    usedExports: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].c.css'
    })
  ],
  
}
module.exports = merge(commonConfig, prodConfig)