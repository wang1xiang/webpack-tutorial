/**
 * 多入口打包问题：不同的入口会存在一些公共使用的模块
 * 当前fetch.js和global.css就是公共模块
 * 当前代码简单 所以重复的影响并不大
 * 当使用jQuery或vue等体积较大的模块 影响比较大
 */

export default endpoint => {
  return fetch(`https://jsonplaceholder.typicode.com${endpoint}`)
    .then(response => response.json())
}
