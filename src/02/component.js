import './style.css'
import Icon from '../../assets/svg/webpack-logo.svg'
import '../../assets/icon/iconfont.css'
import data from '../../src/02/data.json'

function createDocument() {
  const ele = document.createElement('div')
  ele.innerHTML = '这是div盒子'
  const imgdiv = document.createElement('div')
  imgdiv.classList.add('imgdiv')
  const imgbox = new Image()
  imgbox.src = Icon
  ele.appendChild(imgbox)
  ele.appendChild(imgdiv)
  ele.classList.add('component')
  return ele
}

console.log(data, 'asd')

document.body.appendChild(createDocument())
