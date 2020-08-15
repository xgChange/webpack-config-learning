/**
 * @description
 * file-loader要配置输出的路径，并把资源打包到相应路径
 * url-loader则会将资源图片转化为base64，然后在bundle.js中引入。（只适合小图片使用，否则会阻塞渲染）
 *    可以设置limit选项，如果大于图片大小大于limit则会打包成图片，否则变成base64
 *
 * 使用了postcss-loader的autoprefixer配置
 * css-loader下面的modules可以开启模块化
 */

// import './style.css'
import style from './style.scss'
import Icon from '../../assets/svg/webpack-logo.svg'
import '../../assets/icon/iconfont.css'
import data from '../../src/02/data.json'

console.log(style)
function createDocument() {
  const ele = document.createElement('div')
  ele.innerHTML = '这是div盒子'
  const imgdiv = document.createElement('div')
  imgdiv.classList.add(style.notrans)
  const imgbox = new Image()
  imgbox.src = Icon
  console.log(Icon) // ../dist/img/webpack-logo.523e1b9.svg 正好对应了publicPath的../dist
  ele.appendChild(imgbox)
  ele.appendChild(imgdiv)
  ele.classList.add(style.component)
  return ele
}

console.log(data)

document.body.appendChild(createDocument())
