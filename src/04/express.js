/**
 * @description express服务器，使用webpack-dev-middleware中间件
 */

const express = require('express')
const webpack = require('webpack')
const Webpackconfig = require('../../webpack.config')
const WebpackDevMiddle = require('webpack-dev-middleware')
const path = require('path')

const app = express()

const compile = webpack(Webpackconfig)
// app.use('/', (req, res) => {
//   res.send('hello')
// })
app.use(
  WebpackDevMiddle(compile, {
    publicPath: Webpackconfig.output.publicPath,
  })
)
app.use(express.static(path.join(__dirname, 'dist')))

app.listen(3000, () => {
  console.log('server is running')
})
