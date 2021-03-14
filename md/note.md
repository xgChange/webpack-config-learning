# webpack的一些笔记

## 使用webpack、浏览器缓存

因为用户在浏览页面的时候，如果此时有一个js文件发生了改变，而此时文件名没有改变，则浏览器会默认走本地缓存，还是之前的页面。

解决：
```javascript
  // 在output中写contenthash，这样每次文件改变打包后都会生成不一样的hash值。如果没有变化则 hash 是一样的
  output: {
    filename: '[name].[contenthash].js'
  }
```