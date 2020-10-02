/**
 * @description 懒加载
 */
function getComponent() {
  return import(/*webpackChunkName:"loadsh.chunk"*/ 'lodash').then(({ default: _ }) => {
    const div = document.createElement('div')
    div.innerHTML = _.join(['a', 'b', 'c', 'd'], ' $$ ')
    return div
  })
}

// 只有当页面点击了后，才去加载lodash
document.addEventListener('click', () => {
  getComponent().then((res) => {
    document.body.appendChild(res)
  })
})
