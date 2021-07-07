// export const a = '3'
let a = 3

setTimeout(() => {
  a = 'cssss'
  console.log('内部', a)
}, 500)

export { a }

// module.exports.a = a
