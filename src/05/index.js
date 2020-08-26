// tree shaking 的作用是 把未使用的代码剔除掉。只支持ES Module(动态引入), 不支持 require(静态引入)
// 如何使用
// 1. 在webpack.config.js 里使用optimization: {usedExports: true}
// 2. 在package.json里面使用"sideEffects": ["*.css"]  意思是除了数组内的东西不进行tree shaking 其他都进行。
// 在production环境下，不需要配置optimization 因为默认就有，但是要配置sideEffects

export function add (a, b) {
  return a + b
}

export function minus (a, b) {
  return a - b
}
