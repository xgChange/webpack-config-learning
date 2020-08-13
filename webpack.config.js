const BASE_URL = process.env.NODE_ENV === 'development' ? '/' : './'
console.log(BASE_URL)
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    print: './src/03/print.js',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: BASE_URL, // 对于serve环境和打包环境来说, 对于html模板来说的
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash:7].[ext]',
              outputPath: './img',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
}
