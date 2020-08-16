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
  // inline是将打包后的映射关系文件以base64形式写到了js文件，cheap是不精确到哪个字符(提高性能)。
  // 在开发环境推荐使用: cheap-module-eval-source-map，生产环境配置: cheap-module-source-map
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
  // plugin是可以在webpack运行到某个时刻时，帮你做一些事情
  // 例如htmlwebpackplugin是在打包之后起作用的
  // cleanwebpackplugin是在打包之前起作用的
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 以public/index.html为模板生成dist下面的html。并且会自动引入bundle.js
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false, // 自动移除未被使用的资源
    }),
  ],
}
