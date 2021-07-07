import logo1 from '../../assets/logo1.png'

// 

 const ss = () => {
  // const logo1 = require('../../assets/logo1.png')
  const img = document.querySelector('#my-img')
  console.log(img, logo1)
  img.src = logo1
}

ss()