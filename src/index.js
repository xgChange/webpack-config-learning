// const str = require('./01/index')

// import './02/component'
// import './03/component'

// 使用babel需要安装
// 1. babel-loader @babel/core
// 2. @babel/preset-env, 然后填写 "presets": ["@babel/preset-env"]
// 3. 安装@babel/polyfill, 向下兼容一些高级语法
// 4. 使用polyfill 按需加载 ["@babel/preset-env",{"useBuiltIns": "usage", "corejs": 3}]

// babel打包配置使用场景：
// 1. 如果只是打包业务代码，那么只需要babel，preset里面设置就好了
// 2. 如果打包类库、ui组件库则需要 配置 @babel/plugin-transform-runtime, 它不会通过全局变量的方式去污染全局环境
// 3. plugins: [["@babel/plugin-transform-runtime", {"corejs": 3, "helpers": true, "regenerator":true, "useESModules": false"}]]

// import '@babel/polyfill'

import {add} from './05/index'
console.log(add(1, 43)) 

import createBtn from './04/index'

createBtn()
new Promise((resolve, reject) => {
  resolve(2)
}).then((res) => {
  console.log(res)
})

// 监听热更新变化 （如果js变化了，就要写这一部分的逻辑代码）
// 如果css变化了，本来也要写的，但是是由于css-loader里面已经做了处理
if (module.hot) {
  module.hot.accept('./04/index', () => {
    document.body.removeChild(document.querySelector('button'))
    createBtn()
  })
}
