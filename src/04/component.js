import Icon from '../../assets/svg/webpack-logo.svg'

export default function createComponent() {
  const ele = document.createElement('div')
  const imgBox = new Image()
  imgBox.src = Icon
  ele.appendChild(imgBox)
  document.body.appendChild(ele)
}

createComponent()
