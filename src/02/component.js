import './style.css'

function createDocument () {
  const ele = document.createElement('div')
  ele.innerHTML = '这是div盒子'
  const imgdiv = document.createElement('div')
  imgdiv.classList.add('imgdiv')
  ele.appendChild(imgdiv)
  ele.classList.add('component')
  return ele
}

document.body.appendChild(createDocument())