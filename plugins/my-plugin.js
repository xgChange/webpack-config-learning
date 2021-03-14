/**
 * @description myPlugin
 */

module.exports = class MyPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('hello world', (s) => {
      console.log('is done::')
    })
  }
}
