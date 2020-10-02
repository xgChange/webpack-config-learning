const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    // print: './src/03/print.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 语法解析的时候忽视node_modules里面的代码
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
    new CleanWebpackPlugin({ verbose: true }),
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
