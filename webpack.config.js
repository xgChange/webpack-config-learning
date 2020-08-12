const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    print: './src/03/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '../dist/', // 以html的路径为准
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
    new CleanWebpackPlugin(),
  ],
}
