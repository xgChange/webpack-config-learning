// const str = require('./01/index')

// import './02/component'
// import './03/component'

import createBtn from './04/index'

createBtn()

// 监听热更新变化 （如果js变化了，就要写这一部分的逻辑代码）
// 如果css变化了，本来也要写的，但是是由于css-loader里面已经做了处理
if (module.hot) {
  module.hot.accept('./04/index', () => {
    document.body.removeChild(document.querySelector('button'))
    createBtn()
  })
}
