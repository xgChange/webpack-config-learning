/**
 * @description
 * 1. 测试sourcemap
 * webpack.config.js 下的 devtool用来控制是否生成，以及如何生成source map
 * 功能 将错误从压缩文件映射到源文件
 * 2. watch mode(观察模式)
 * 命令: webpack --watch
 * cleanStaleWebpackAssets: false 用来设置不清楚未被使用的资源
 * 3. 使用webpack-dev-server
 * 4. 使用webpack-dev-middleware(使用)
 *      搞懂了 file-loader的outputPath选项是基于output选项的path
 *      搞懂了 output选项的publicPath是对于 打包时和服务器时不同的路径
 *      所以要加一层判断 是否是开发环境
 */

import './component'

export default function print() {
  let a = 4
  console.log(a)
}
