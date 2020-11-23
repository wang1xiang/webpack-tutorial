// ./webpack.config.js
const webpack = require('webpack')
module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    // 内置插件 对象中的成员都可以被注入到代码中
    new webpack.DefinePlugin({
      // 值要求的是一个代码片段
      API_BASE_URL: JSON.stringify('https://api.example.com'),
      API_PREFIX: JSON.stringify('http')
    })
  ]
}