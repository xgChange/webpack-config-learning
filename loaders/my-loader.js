/**
 * @description 自定义的loader
 */

module.exports = function (txt) {
  console.log(this.query.params.dd)
  // return txt
  this.callback(null, txt)
}
