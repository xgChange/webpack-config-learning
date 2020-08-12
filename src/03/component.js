import print from './print'

export default function createComponent() {
  const ele = document.createElement('div')
  const btnBox = document.createElement('button')
  btnBox.innerText = '我是按钮'
  btnBox.addEventListener('click', print)
  ele.appendChild(btnBox)
  document.body.appendChild(ele)
}

createComponent()
