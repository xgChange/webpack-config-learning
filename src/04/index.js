/**
 * @description 使用 hmr
 */
import './style.css'

function createDiv(index) {
  const div = document.createElement('div')
  div.innerHTML = `item${index}`
  // div.classList.add('mydiv')
  return div
}

function createBtn() {
  let index = 0
  const btn = document.createElement('button')
  btn.innerText = '111'
  btn.addEventListener('click', () => {
    index++
    const div = createDiv(index)
    document.body.appendChild(div)
  })
  document.body.appendChild(btn)
}
// console.log(111)

export default createBtn
