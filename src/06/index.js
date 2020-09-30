/**
 * @description 代码分割
 * 
 * 为什么要代码分割？
 * 第一种方式：
 *  打包一个main.js文件，加载时间很长 (2Mb)
 *  当文件修改，用户重新访问我们的页面时，又要加载2Mb的文件
 * 
 * 第二种方式：
 *   main.js被拆分成 loadsh.js(1Mb), main.js(1Mb)
 *   当业务代码更新的时候，只需要加载main.js(1Mb)
 *   而浏览器又是并行加载js文件的
 *   1. 增加配置项：optimization: {
                splitChunks: {  // 同步代码分割
                  chunks: 'all'
                }
              }
     2. 异步加载库，自动代码分割。在要进行异步加载的模块中加注释，webpackChunkName:'lodash'
 */

//  同步：
// import _ from 'lodash'

// console.log(_.join([2, 5, 7, 54], '$$'))

// 异步：
function getComponent () {
  return import(/*webpackChunkName:"loadsh.chunk"*/'lodash').then(({default: _}) => {
    const div = document.createElement('div')
    div.innerHTML = _.join(['a', 'b', 'c', 'd'], ' $$ ')
    return div
  })
}

getComponent().then(res => {
  document.body.appendChild(res)
})