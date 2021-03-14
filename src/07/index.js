/**
 * @description 懒加载
 */

import txt from './txt.txt'

function getComponent() {
  return import(/*webpackChunkName:"loadsh.chunk"*/ 'lodash').then(({ default: _ }) => {
    const div = document.createElement('div')
    div.innerHTML = _.join(['a', 'b', 'c', 'd'], ' $$ ')
    return div
  })
}

// 只有当页面点击了后，才去加载lodash
document.addEventListener('click', () => {
  console.log('点击a')
  getComponent().then((res) => {
    document.body.appendChild(res)
  })
})
