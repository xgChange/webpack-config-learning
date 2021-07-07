const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MyPlugin = require('../plugins/my-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    // print: './src/03/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js', // 非入口文件的名称
    path: path.join(__dirname, '../dist'),
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, '../loaders')],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, // 语法解析的时候忽视node_modules里面的代码
        loader: 'babel-loader',
      },
      {
        test: /\.txt$/,
        exclude: /node_modules/,
        use: {
          loader: 'my-loader',
          options: {
            params: {
              dd: 22,
            },
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: './assets1',
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
      template: 'public/index.html'
    }),
    new CleanWebpackPlugin({ verbose: true }),
    new MyPlugin(),
  ],
  optimization: {
    splitChunks: {
      // 代码分割
      chunks: 'all', // all是对同步和异步代码都分割，async是异步代码
      cacheGroups: {
        // 如果是同步代码，会走到这里，详情见文档
        vendors: false,
        default: false,
      },
    },
  },
}
