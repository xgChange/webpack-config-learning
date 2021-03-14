console.log('before')
const { a } = require('./test')
setTimeout(() => {
  console.log('实质', a)
}, 500)
console.log('after')
