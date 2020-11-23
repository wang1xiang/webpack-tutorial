// 运行在nodeJs环境中的JS文件 按照CommonJS方式编码
// webpack配置项较多 需要智能提示
const path = require('path')
module.exports = {
  mode: 'none', // 默认使用production模式
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'output')
  }
}