// 开发环境配置
const common = require('./webpack.common')
const webpack = require('webpack')
/**
 * Object.assign覆盖调前一个对象中同名属性
 * 但是像配置中的plugins数组来说 只希望在原有公共配置上添加 Object.assign做不到
 * 使用webpack-merge 专门合并webpack配置
 * npm i webpack-merge --save--dev
 * 
 * webpack --config webpack.prod.js 指定使用配置文件进行打包
 */
// module.exports = Object.assign(common, {
// })

const merge = require('webpack-merge')
module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-eval-module-source-map',
  devServer: {
    hot: true,
    contentBase: 'public',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})